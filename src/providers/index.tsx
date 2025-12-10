import { ThemeProvider } from "next-themes"
import { TanstackProvider } from "./tanstack"
import { ToasterProvider } from "./toaster"

export default function ProvidersWrapper() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ToasterProvider richColors />
      <TanstackProvider />
    </ThemeProvider>
  )
}
