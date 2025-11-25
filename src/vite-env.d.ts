/// <reference types="vite/client" />

declare module "*.md" {
  const url: string
  export default url
}
