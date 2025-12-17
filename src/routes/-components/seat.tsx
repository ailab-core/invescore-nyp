import { Animated } from "@/components/blocks"
import SeatWEBP from "/seat.webp"

export default function Seat() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24" id="map">
      <Animated>
        <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300 text-center">
          {"SEAT"}
        </h1>
        <div className="p-8">
          <img className="rounded-4xl w-[700px] max-w-full" src={SeatWEBP} alt="Seat" />
        </div>
      </Animated>
    </div>
  )
}
