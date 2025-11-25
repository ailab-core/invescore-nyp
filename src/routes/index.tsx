import { createFileRoute } from "@tanstack/react-router"
import Agenda from "./-components/agenda"
import Landing from "./-components/landing"
import Menu from "./-components/menu"
import Map from "./-components/map"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <>
      <Landing />
      <Agenda />
      <Menu />
      <Map />
    </>
  )
}
