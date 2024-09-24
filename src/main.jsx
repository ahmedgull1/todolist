import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Appcontext/context.jsx'
// import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter basename="/">
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
)
