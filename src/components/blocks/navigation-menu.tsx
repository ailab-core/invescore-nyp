import { Link } from "@tanstack/react-router"
import RedCurtainsPNG from "/red-curtains.png"

export function NavigationMenu() {
  return (
    <div className="fixed w-screen top-0 bg-secondary/20 flex justify-center items-center gap-8 h-12 backdrop-blur-3xl z-50 border border-b-orange-300 uppercase text-xs lg:text-base">
      <Link to="/">{"Home"}</Link>
      <a href="#agenda">{"Agenda"}</a>
      <a href="#menu">{"Menu"}</a>
      <a href="#map">{"Seat"}</a>
      <img src={RedCurtainsPNG} className="w-[92px] lg:w-max lg:h-svh absolute -left-5 -top-3 lg:-left-10 lg:top-0 lg:rotate-0 rotate-12 brightness-50 animate-in transition-all pointer-events-none" />
      <img src={RedCurtainsPNG} className="w-[92px] lg:w-max lg:h-svh absolute -right-5 -top-3 lg:-right-10 lg:top-0 rotate-y-180 lg:rotate-0 -rotate-12 brightness-50 pointer-events-none" />
    </div>
  )
}
