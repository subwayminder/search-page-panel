import 'pinia'
import { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // you can define simpler values too
    router: Router;
  }
}
