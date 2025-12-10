import * as motion from "motion/react-client"
import type { HTMLMotionProps } from "motion/react"

export function Animated({
  children,
  transition,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ scale: 1.1, y: 100, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
