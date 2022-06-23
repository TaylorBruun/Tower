import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  events: {},
  // eventTypes:['concert', 'convention', 'sport', 'digital']
})
