import AnimatedContent from "@/components/ui-patterns/animated-content"
import MenuPNG from '/menu.png'

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

export default function Menu() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 my-32" id="menu">
      <MenuText delay={1.0}>
        <h1 className="text-4xl md:text-8xl mb-4 bg-clip-text text-orange-300">
          MENU
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
        <img src={MenuPNG} alt="Menu" className="w-full md:w-4xl rounded-3xl shadow-lg object-cover" />
      </AnimatedContent>
    </div>
  )
}
