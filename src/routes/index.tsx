import { createFileRoute } from "@tanstack/react-router"
import Agenda from "./-components/agenda"
import Landing from "./-components/landing"
import Menu from "./-components/menu"
import Seat from "./-components/seat"
import Posters from "./-components/posters"
import { NavigationMenu } from "@/components/blocks"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <>
      <NavigationMenu />
      <div className="space-y-32 relative overflow-hidden">
        <div className="absolute h-full top-0 left-1/2 -translate-x-1/2 bg-red-900 w-xs -z-10 opacity-10">
          <div className="relative w-[calc(100%-32px)] h-[calc(100%-32px)] left-4 top-4 border-4 border-foreground" />
        </div>
        <Landing />
        <Agenda />
        <Menu />
        <Seat />
        <Posters />
      </div>
    </>
  )
}
