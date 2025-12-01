import { cn } from "uilab-core"
import AnimatedContent from "@/components/ui-patterns/animated-content"
import ProscuittoPNG from '/proscuitto.png'
import BeefThermidorPNG from '/beef-thermidor.png'
import SearedDuckBreastPNG from '/seared-duck-breast.png'
import LemonCurdPNG from '/lemon-curd.png'

type Food = {
  image: {
    src: string
    alt: string
  }
  title: string
  subtitle?: string
  description: string
}

const MenuItems: Array<Food> = [
  {
    image: {
      src: ProscuittoPNG,
      alt: "Proscuitto"
    },
    title: "Proscuitto chopped salad",
    description: "Fresh lettuce leaves paired with thinly sliced, savory and slightly salty prosciutto (Italian cured ham). Lightly dressed with olive oil, balsamic sauce, and aromatic herbs for a fresh, delicate, and refined flavor."
  },
  {
    image: {
      src: BeefThermidorPNG,
      alt: "Beef thermidor steak"
    },
    title: "Beef thermidor steak",
    subtitle: "Surf and turf",
    description: "A luxurious combination of tender steak and fresh seafood, bringing together the rich flavors of land and sea."
  },
  {
    image: {
      src: SearedDuckBreastPNG,
      alt: "Seared Duck Breast"
    },
    title: "Seared Duck Breast",
    description: "Tender duck breast, seared to a golden-brown crust while keeping the inside juicy, served with teriyaki sauce, roasted vegetables, or basmati rice."
  },
  {
    image: {
      src: LemonCurdPNG,
      alt: "Lemon Curd & Fruits"
    },
    title: "Lemon Curd & Fruits",
    description: "Tender duck breast, seared to a golden-brown crust while keeping the inside juicy, served with teriyaki sauce, roasted vegetables, or basmati rice."
  },
]

export default function Menu() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24" id="menu">
      <AnimatedContent
        direction="vertical"
        reverse={false}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.7}
        duration={0.7}
        delay={0.4}
      >
        <h1 className="text-4xl md:text-6xl mb-4 bg-clip-text text-orange-300">
          MENU
        </h1>
      </AnimatedContent>
      <div className="flex flex-col items-center space-y-24">
        {MenuItems.map((food, index) => (
          <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12" key={food.title}>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.7}
                scale={1}
                delay={0.4}
                className={cn("w-fit", index % 2 === 0 ? "order-first md:order-last" : "order-first")}
              >
                <img
                  src={food.image.src}
                  alt={food.image.alt}
                  className="w-3xs rounded-3xl object-cover"
                />
              </AnimatedContent>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.7}
                scale={1}
                delay={0.4}
                className={"md:w-lg space-y-4 text-lg px-12"}
              >
                <p className="text-3xl font-bold text-center md:text-left">
                  {food.title}
                  {food.subtitle && <span className="text-lg ml-2">({food.subtitle})</span>}
                </p>
                <p className="text-justify md:text-left">{food.description}</p>
              </AnimatedContent>
            </div>
            <hr className="bg-orange-300 w-[100px]" />
          </>
        ))}
      </div>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.7}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.7}
        scale={1}
        delay={0.4}
        className="space-y-4 text-lg"
      >
        <p className="text-2xl font-bold text-center">
          Drinks
        </p>
        <p className="text-lg text-center">
          Welcoming Wine • Millenia • Heineken • Soft drinks
        </p>
      </AnimatedContent>
    </div>
  )
}
