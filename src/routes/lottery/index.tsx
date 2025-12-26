import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import LotteryLogo from "/lottery.png"
import SlotColumn from "./-components/slot-column"
import { NAME_LIST } from "./-data"

export const Route = createFileRoute("/lottery/")({
  component: RouteComponent,
})

const numbers = Array.from(
  { length: NAME_LIST.length - 1 },
  (_, i) => i + 1
);

// Fisher–Yates shuffle
for (let i = numbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

function RouteComponent() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [revealedSlots, setRevealedSlots] = useState({
    company: false,
    position: false,
    name: false,
  })
  const [spinningIndex, setSpinningIndex] = useState(0)
  const [activeSlot, setActiveSlot] = useState<string | null>(null)

  const rollSlot = async (key: string, delay: number, last: boolean = false) => {
    setActiveSlot(key)
    await new Promise((resolve) => setTimeout(resolve, delay))
    setRevealedSlots((prev) => ({ ...prev, [key]: true }))
    setActiveSlot(null)
    if (last) return
    await new Promise((resolve) => setTimeout(resolve, 300))
  }

  const startSpin = async () => {
    if (isSpinning) return
    setIsSpinning(true)
    setRevealedSlots({ company: false, position: false, name: false })
    setSelectedIndex(numbers.pop() as number)

    const spinningInterval = setInterval(() => {
      setSpinningIndex((prev) => (prev + 1) % NAME_LIST.length)
    }, 50)

    await rollSlot("company", 3000)
    await rollSlot("position", 3000)
    await rollSlot("name", 4000, true)

    clearInterval(spinningInterval)
    setIsSpinning(false)
  }

  return (
    <div className="mt-48 flex flex-col justify-center items-center gap-16">
      <h1 className="flex items-center gap-4 text-4xl lg:text-6xl bg-clip-text text-orange-300">
        <img src={LotteryLogo} alt="Invescore Logo" className="w-[700px]" />
      </h1>
      <div className="flex gap-8 mb-8">
        <SlotColumn
          label="Company"
          value={
            revealedSlots.company
              ? NAME_LIST[selectedIndex].company
              : NAME_LIST[spinningIndex].company
          }
          isRevealed={revealedSlots.company}
          isActive={activeSlot === "company"}
          isSpinning={isSpinning && !revealedSlots.company}
          allValues={NAME_LIST.map((item) => item.company)}
        />
        <SlotColumn
          label="Position"
          value={
            revealedSlots.position
              ? NAME_LIST[selectedIndex].position
              : NAME_LIST[spinningIndex].position
          }
          isRevealed={revealedSlots.position}
          isActive={activeSlot === "position"}
          isSpinning={isSpinning && !revealedSlots.position}
          allValues={NAME_LIST.map((item) => item.position)}
        />
        <SlotColumn
          label="Name"
          value={
            revealedSlots.name
              ? NAME_LIST[selectedIndex].name
              : NAME_LIST[spinningIndex].name
          }
          isRevealed={revealedSlots.name}
          isActive={activeSlot === "name"}
          isSpinning={isSpinning && !revealedSlots.name}
          allValues={NAME_LIST.map((item) => item.name)}
        />
      </div>
      <button
        onClick={startSpin}
        disabled={isSpinning}
        className="px-8 py-4 bg-orange-300 hover:bg-orange-400 disabled:bg-gray-500 text-black rounded-lg text-xl font-bold transition-colors cursor-pointer"
      >
        {isSpinning ? "Spinning..." : "Spin!"}
      </button>
    </div>
  )
}
