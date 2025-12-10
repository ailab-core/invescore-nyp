import { Fragment } from "react"
import { Animated } from "@/components/blocks"
import { cn } from "@/lib/utils"
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
    description: ""
  },
]

export default function Menu() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24" id="menu">
      <Animated>
        <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300">
          MENU
        </h1>
      </Animated>
      <div className="flex flex-col items-center space-y-24">
        {MenuItems.map((food, index) => (
          <Fragment key={food.title}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <Animated className={cn("w-fit", index % 2 === 0 ? "order-first lg:order-last" : "order-first")}>
                <img
                  src={food.image.src}
                  alt={food.image.alt}
                  className="w-3xs rounded-3xl object-cover"
                />
              </Animated>
              <Animated className="lg:w-lg space-y-4 text-lg px-12">
                <p className="text-3xl font-bold text-center lg:text-left">
                  {food.title}
                  {food.subtitle && <span className="text-lg ml-2">({food.subtitle})</span>}
                </p>
                <p className="text-justify lg:text-left">{food.description}</p>
              </Animated>
            </div>
            <hr className="bg-orange-300 w-[100px]" />
          </Fragment>
        ))}
        <Animated className="space-y-4 text-center px-12">
          <p className="text-2xl font-bold">
            Drinks
          </p>
          <p className="text-lg">
            {"Welcoming Wine • Heineken • Millenia • Soft drinks"}
          </p>
        </Animated>
      </div>
    </div>
  )
}
