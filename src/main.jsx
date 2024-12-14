/**
 * @copyright 2024 codewihthsadee
 * @license Apache-2.0
 */
/**
 * Node modules
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


/** 
 * Components
*/
import App from './App.jsx'
/** 
 * CSS link
 */
import 'lenis/dist/lenis.css'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 