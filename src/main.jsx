import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "flowbite-react"
import "flowbite/dist/flowbite.css";
import RoutersComponent from './configuration/RoutersComponent';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutersComponent />
  </StrictMode>,
)
