import { DotIcon } from "lucide-react"
import { Animated, ScrollVelocity } from "@/components/blocks"
import HollywoodPNG from '/hollywood.png'
import IntroductionVideo from '/introduction.mp4'

export default function LandingPage() {
  return (
    <>
      <div className="relative flex lg:flex-row flex-col justify-center items-center gap-8 lg:gap-12 h-svh">
        <div className="absolute w-screen h-max opacity-10 -bottom-1/6">
          <ScrollVelocity
            texts={["TOGETHER INTO THE NEW YEAR 2026 ✷"]}
            velocity={100}
            className="text-6xl lg:text-9xl font-black font-sans pointer-events-none"
            numCopies={10}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Animated>
            <img className="w-xs lg:w-md pointer-events-none" src={HollywoodPNG} />
          </Animated>
          <Animated className="lg:block hidden" transition={{ delay: 0.2 }}>
            <h1 className="text-4xl font-black uppercase">{"You are invited!"}</h1>
          </Animated>
          <Animated className="lg:block hidden" transition={{ delay: 0.4 }}>
            <div className="flex lg:text-xl">
              December 26th 2025
              <DotIcon className="size-6" />
              17:00 PM
              <DotIcon className="size-6" />
              UG Palace
            </div>
          </Animated>
        </div>
        <Animated>
          <video controls className="aspect-video rounded-lg w-full lg:max-w-3xl" autoPlay>
            <source src={IntroductionVideo} type="video/mp4" />
          </video>
        </Animated>
        <div className="flex flex-col justify-center items-center gap-2">
          <Animated className="lg:hidden block" transition={{ delay: 0.4 }}>
            <h1 className="text-4xl font-black uppercase">{"You are invited!"}</h1>
          </Animated>
          <Animated className="lg:hidden block" transition={{ delay: 0.6 }}>
            <div className="flex lg:text-xl">
              December 26th 2025
              <DotIcon className="size-6" />
              17:00 PM
              <DotIcon className="size-6" />
              UG Palace
            </div>
          </Animated>
        </div>
      </div>
    </>
  )
}
