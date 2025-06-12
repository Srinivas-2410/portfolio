import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastProvider, ToastViewport, Toast } from './components/ui/Toast'
import { useToast } from './components/ui/use-toast'

function ToastManager() {
  const { toasts } = useToast()
  return (
    <ToastProvider>
      <ToastViewport />
      {toasts.map((toast) => (
        <Toast key={toast.id} variant={toast.variant}>
          <div className="flex flex-col gap-1">
            <span className="font-bold">{toast.title}</span>
            <span>{toast.description}</span>
          </div>
        </Toast>
      ))}
    </ToastProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastManager /> {/* <-- Add this line */}
  </StrictMode>,
)
