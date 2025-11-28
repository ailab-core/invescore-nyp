import AnimatedContent from "@/components/ui-patterns/animated-content"

export const MenuText = ({ delay, children }: { delay: number, children: React.ReactNode }) => (
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
    delay={delay}
  >
    {children}
  </AnimatedContent>
)

export default function Map() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 m-32 mt-64" id="map">
      <MenuText delay={1.0}>
        <h1 className="text-4xl md:text-8xl mb-4 bg-clip-text text-orange-300">
          MAP
        </h1>
      </MenuText>
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
        delay={1.2}
      >
        <div className="w-xs md:w-4xl aspect-video bg-muted-foreground rounded-lg" />
      </AnimatedContent>
    </div>
  )
}
