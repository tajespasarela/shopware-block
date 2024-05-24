import { createApp, reactive } from 'vue'
import './style.css'
import { BLOCK_CONTEXT } from "./components/Block/constants.ts";
import App from './App.vue'

const app = createApp(App)

app.provide(BLOCK_CONTEXT, reactive({}))

app.mount('#app')
