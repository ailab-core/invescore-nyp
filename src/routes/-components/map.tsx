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
    <div className="mx-auto px-4 md:px-12 py-48 flex justify-center items-center gap-12" id="map">
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
      <div className="flex flex-col gap-8">
        <MenuText delay={1.0}>
          <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-orange-300">
            M
          </h1>
        </MenuText>
        <MenuText delay={1.1}>
          <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-orange-300">
            A
          </h1>
        </MenuText>
        <MenuText delay={1.2}>
          <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-orange-300">
            P
          </h1>
        </MenuText>
      </div>
    </div>
  )
}
