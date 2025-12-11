import { RouterProvider, createHashHistory, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routeTree } from "@/routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const hashHistory = createHashHistory()

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  scrollRestorationBehavior: "smooth",
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  history: hashHistory,
})

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export function TanstackProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} defaultPreload="intent" />
    </QueryClientProvider>
  )
}
