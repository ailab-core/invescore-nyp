import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import SlotColumn from "./-components/slot-column"

export const Route = createFileRoute("/lottery/")({
  component: RouteComponent,
})

const NAME_LIST = [
  { name: "Alice", company: "Company A", department: "Dept 1" },
  { name: "Bob", company: "Company B", department: "Dept 2" },
  { name: "Charlie", company: "Company C", department: "Dept 3" },
  { name: "Diana", company: "Company D", department: "Dept 4" },
  { name: "Ethan", company: "Company E", department: "Dept 5" },
]

function RouteComponent() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [revealedSlots, setRevealedSlots] = useState({
    company: false,
    department: false,
    name: false,
  })
  const [spinningIndex, setSpinningIndex] = useState(0)
  const [activeSlot, setActiveSlot] = useState<string | null>(null)

  const startSpin = async () => {
    if (isSpinning) return
    setIsSpinning(true)
    setRevealedSlots({ company: false, department: false, name: false })

    const finalIndex = Math.floor(Math.random() * NAME_LIST.length)
    setSelectedIndex(finalIndex)

    // Roll company slot
    setActiveSlot("company")
    await animateSlot(3000)
    setRevealedSlots((prev) => ({ ...prev, company: true }))
    setActiveSlot(null)
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Roll department slot
    setActiveSlot("department")
    await animateSlot(3000)
    setRevealedSlots((prev) => ({ ...prev, department: true }))
    setActiveSlot(null)
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Roll name slot
    setActiveSlot("name")
    await animateSlot(4000)
    setRevealedSlots((prev) => ({ ...prev, name: true }))
    setActiveSlot(null)

    setIsSpinning(false)
  }

  const animateSlot = (duration: number) => {
    return new Promise<void>((resolve) => {
      let speed = 50
      const slowDownStart = duration - 1000
      let elapsed = 0

      const interval = setInterval(() => {
        elapsed += speed
        if (elapsed > slowDownStart) {
          speed = Math.min(speed + 20, 300)
        }
        setSpinningIndex((prev) => (prev + 1) % NAME_LIST.length)
      }, speed)

      setTimeout(() => {
        clearInterval(interval)
        resolve()
      }, duration)
    })
  }

  return (
    <div className="mt-48 flex flex-col justify-center items-center gap-16">
      <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300">
        Lottery
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
          allValues={NAME_LIST.map((item) => item.company)}
        />
        <SlotColumn
          label="Department"
          value={
            revealedSlots.department
              ? NAME_LIST[selectedIndex].department
              : NAME_LIST[spinningIndex].department
          }
          isRevealed={revealedSlots.department}
          isActive={activeSlot === "department"}
          allValues={NAME_LIST.map((item) => item.department)}
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
