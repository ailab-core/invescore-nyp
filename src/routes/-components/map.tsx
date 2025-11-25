import AnimatedContent from "@/components/ui-patterns/animated-content"

export default function Map() {
  return (
    <div className="container mx-auto px-4 md:px-12 my-24 pt-24" id="map">
      <div className="flex flex-col justify-center items-center gap-12">
        <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-orange-300">
          Map
        </h1>
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
          delay={0.2}
        >
          <div className="w-xs md:w-4xl aspect-video bg-muted-foreground rounded-lg" />
        </AnimatedContent>
      </div>
    </div>
  )
}
