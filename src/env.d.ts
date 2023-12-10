/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_MAIN_API: string
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv
}
