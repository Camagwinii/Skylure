import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const hour = new Date().getHours()

let slogan: string

if (hour >= 5 && hour < 12) {
  slogan = 'Good morning, the sky is yours.'
} else if (hour >= 12 && hour < 17) {
  slogan = 'Make the most of your day.'
} else if (hour >= 17 && hour < 21) {
  slogan = 'See how the evening unfolds.'
} else {
  slogan = "Rest easy. We've got your weather."
}

document.title = `Skylure : ${slogan}`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)