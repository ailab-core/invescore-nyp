import { Animated } from "@/components/blocks"

export default function Seat() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-12 py-24" id="map">
      <Animated>
        <h1 className="text-4xl lg:text-6xl mb-4 bg-clip-text text-orange-300 text-center">
          {"SEAT"}
        </h1>
        <p className="text-center text-3xl mt-32">
          {"Coming soon..."}
        </p>
      </Animated>
    </div>
  )
}
