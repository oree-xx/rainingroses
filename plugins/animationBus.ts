import { defineNuxtPlugin } from '#app'
import mitt from 'mitt'

// Create a typed emitter
type Events = {
  'preloader:complete': void;
  'homehero:complete': void;
}

export default defineNuxtPlugin(() => {
  const emitter = mitt<Events>()

  return {
    provide: {
      animBus: emitter
    }
  }
}) 