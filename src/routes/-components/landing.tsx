import { DotIcon } from "lucide-react"
import AnimatedContent from "@/components/ui-patterns/animated-content"
import ScrollVelocity from "@/components/ui-patterns/scroll-velocity"
import HollywoodPNG from '/hollywood.png'
import IntroductionVideo from '/introduction.mp4'

export default function LandingPage() {
  return (
    <>
      <div className="absolute w-screen h-max opacity-10 -bottom-20">
        <ScrollVelocity
          texts={["TOGETHER INTO THE NEW YEAR - "]}
          velocity={100}
          className="text-6xl md:text-9xl font-black font-serif pointer-events-none"
          numCopies={10}
        />
      </div>
      <div className="relative flex md:flex-row flex-col justify-center items-center gap-8 md:gap-12 h-svh">
        <div className="flex flex-col justify-center items-center gap-8">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0}
          >
            <img className="w-xs md:w-md pointer-events-none" src={HollywoodPNG} />
          </AnimatedContent>
          <AnimatedContent
            className="md:block hidden"
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.2}
          >
            <h1 className="text-4xl font-black uppercase">{"You are invited!"}</h1>
          </AnimatedContent>
          <AnimatedContent
            className="md:block hidden"
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.4}
          >
            <div className="flex md:text-xl">
              December 26th 2025
              <DotIcon className="size-6" />
              17:00 PM
              <DotIcon className="size-6" />
              UG Palace
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={0.7}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.1}
          delay={0.2}
        >
          <video controls className="aspect-video rounded-lg w-full md:max-w-3xl" >
            <source src={IntroductionVideo} type="video/mp4" />
          </video>
        </AnimatedContent>
        <div className="flex flex-col justify-center items-center gap-2">
          <AnimatedContent
            className="md:hidden block"
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.4}
          >
            <h1 className="text-4xl font-black uppercase">{"You are invited!"}</h1>
          </AnimatedContent>
          <AnimatedContent
            className="md:hidden block"
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0.6}
          >
            <div className="flex md:text-xl">
              December 26th 2025
              <DotIcon className="size-6" />
              17:00 PM
              <DotIcon className="size-6" />
              UG Palace
            </div>
          </AnimatedContent>
        </div>
      </div>
    </>
  )
}
