import { inject } from '@vercel/analytics'
import App from './App.svelte'

inject()

const app = new App({
  target: document.getElementById('app'),
})

export default app
