import ReactDom from 'react-dom/client'
import React from 'react'
import App from './App.jsx' // Import App Component

// Create a root element
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)