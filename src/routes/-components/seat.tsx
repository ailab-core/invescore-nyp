import AnimatedContent from "@/components/ui-patterns/animated-content"

export default function Seat() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24" id="map">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.4}
      >
        <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300 text-center">
          SEAT
        </h1>
        <p className="text-center text-3xl mt-32">Coming soon...</p>
      </AnimatedContent>
    </div>
  )
}
