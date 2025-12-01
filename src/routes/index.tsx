import { createFileRoute } from "@tanstack/react-router"
import Agenda from "./-components/agenda"
import Landing from "./-components/landing"
import Menu from "./-components/menu"
import Seat from "./-components/seat"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div className="space-y-32">
      <Landing />
      <Agenda />
      <Menu />
      <Seat />
    </div>
  )
}
