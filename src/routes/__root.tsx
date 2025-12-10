import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  console.log(`
========================================================================

 ▄ .▄ ▄▄▄·  ▄▄▄· ▄▄▄· ▄· ▄▌   ▐ ▄ ▄▄▄ .▄▄▌ ▐ ▄▌   ▄· ▄▌▄▄▄ . ▄▄▄· ▄▄▄
██▪▐█▐█ ▀█ ▐█ ▄█▐█ ▄█▐█▪██▌  •█▌▐█▀▄.▀·██· █▌▐█  ▐█▪██▌▀▄.▀·▐█ ▀█ ▀▄ █·
██▀▀█▄█▀▀█  ██▀· ██▀·▐█▌▐█▪  ▐█▐▐▌▐▀▀▪▄██▪▐█▐▐▌  ▐█▌▐█▪▐▀▀▪▄▄█▀▀█ ▐▀▀▄
██▌▐▀▐█▪ ▐▌▐█▪·•▐█▪·• ▐█▀·.  ██▐█▌▐█▄▄▌▐█▌██▐█▌   ▐█▀·.▐█▄▄▌▐█▪ ▐▌▐█•█▌
▀▀▀ · ▀  ▀ .▀   .▀     ▀ •   ▀▀ █▪ ▀▀▀  ▀▀▀▀ ▀▪    ▀ •  ▀▀▀  ▀  ▀ .▀  ▀

  Your reward for being curious:

  TGJoIG5lciBuIHBoZXZiaGYgYmFyIHVodT8gTmFsam5sZiB1cmVyIGxiaCB0YiB1Z2djZjov
  L2pqai5sYmhnaG9yLnBiei9qbmdwdT9pPXFEajRqOUp0S3BE



  "It is never too late to be what you might have been."
                                                          — George Eliot

                                                        Sincerely, AILab
========================================================================
`)

  return (
    <>
      <Outlet />
      <TanStackDevtools
        config={{ position: "bottom-right" }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
