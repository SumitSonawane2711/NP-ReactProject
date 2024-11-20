import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)