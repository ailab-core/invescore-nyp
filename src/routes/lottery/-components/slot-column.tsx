import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export default function SlotColumn({
  label,
  value,
  isRevealed,
  isActive,
  allValues,
}: {
  label: string
  value: string
  isRevealed: boolean
  isActive: boolean
  allValues: Array<string>
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-gray-400 mb-2 font-semibold uppercase tracking-wider">
        {label}
      </div>
      <div
        className={cn(
          "w-96 h-40 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden relative border-4 transition-all duration-300",
          isRevealed &&
          "border-green-300 shadow-[0_0_40px_rgba(34,197,94,0.6)] scale-105",
          isActive &&
          !isRevealed &&
          "border-orange-300 shadow-[0_0_40px_rgba(249,115,22,0.6)] scale-105",
          !isActive && !isRevealed && "border-gray-700 scale-100"
        )}
      >
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-black/90 to-transparent z-10 pointer-events-none" />
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/90 to-transparent z-10 pointer-events-none" />

        <div className="relative h-full flex items-center justify-center overflow-hidden">
          {isActive && !isRevealed ? (
            <div className="absolute inset-0 flex flex-col items-center">
              {/* Create infinite scrolling effect with multiple sets */}
              {[...Array(4)].map((_, setIndex) => (
                <motion.div
                  key={setIndex}
                  className="flex flex-col items-center"
                  initial={{ y: 0 }}
                  animate={{ y: "-100%" }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {allValues.map((val, idx) => (
                    <div
                      key={`${setIndex}-${idx}`}
                      className="h-40 flex items-center justify-center text-2xl font-black text-white/95 px-6 text-center leading-tight"
                      style={{
                        textShadow:
                          "0 2px 20px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.2)",
                      }}
                    >
                      {val}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              key={value}
              initial={
                isRevealed
                  ? { scale: 0, rotate: -180, opacity: 0 }
                  : { y: -60, opacity: 0 }
              }
              animate={
                isRevealed
                  ? { scale: 1, rotate: 0, opacity: 1 }
                  : { y: 0, opacity: 1 }
              }
              transition={
                isRevealed
                  ? {
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                    duration: 1,
                  }
                  : {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }
              }
              className="text-2xl font-black text-white px-6 text-center leading-tight"
              style={{
                textShadow: isRevealed
                  ? "0 0 30px rgba(34,197,94,0.9), 0 0 15px rgba(34,197,94,0.6), 0 2px 20px rgba(0,0,0,0.8)"
                  : "0 2px 20px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.2)",
              }}
            >
              {value}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
