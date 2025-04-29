import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'

// ✅ Elastic APM RUM agent import and initialization
import { init as initApm } from '@elastic/apm-rum'

initApm({
  serviceName: 'pluton-lake-frontend',
  serverUrl: 'https://your-apm-server-url', // ⬅️ Replace this with your actual APM server URL
  environment: 'production',
  distributedTracingOrigins: ['https://pluton-lake.vercel.app'],
  capturePageLoad: true,
  captureErrors: true
})

// ✅ React App Rendering
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
