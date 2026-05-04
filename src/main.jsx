import ReactDom from 'react-dom/client'
import React from 'react'

// Define App element
const App = () => {
  return <h1>Hello React!</h1>
}

// Create a root element
const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)