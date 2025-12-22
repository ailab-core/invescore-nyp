import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AilabPoster from "/posters/ailab.webp"
import InvescoreFIPoster from "/posters/invescore-fi.webp"
import ICapitalPoster from "/posters/icapital.webp"
import ILeasePoster from "/posters/ilease.webp"
import MTNPoster from "/posters/mtn.webp"
import PropertyPoster from "/posters/property.webp"
import SIBJPoster from "/posters/sibj.webp"
import PocketPoster from "/posters/pocket.webp"
import { Animated } from "@/components/blocks"

export default function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  )

  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24 px-16" id="movies">
      <Animated>
        <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300">
          MOVIES
        </h1>
      </Animated>
      <Carousel
        plugins={[plugin.current]}
        className="w-full lg:max-w-6xl"
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={AilabPoster} alt="AilabPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={InvescoreFIPoster} alt="InvescoreFIPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={ICapitalPoster} alt="ICapitalPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={ILeasePoster} alt="ILeasePoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={MTNPoster} alt="MTNPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={PropertyPoster} alt="PropertyPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={SIBJPoster} alt="SIBJPoster" />
          </CarouselItem>
          <CarouselItem className="basis-1/1 lg:basis-1/3">
            <img className="w-full" src={PocketPoster} alt="PocketPoster" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
