
import { useEffect, useState } from "react"

const TOAST_REMOVE_DELAY = 1000000

export function useToast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const timers = []

    toasts.forEach((toast) => {
      const timer = setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((t) => t.id !== toast.id)
        )
      }, TOAST_REMOVE_DELAY)

      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [toasts])

  function toast({ title, description, variant }) {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: crypto.randomUUID(),
        title,
        description,
        variant,
      },
    ])
  }

  return { toast, toasts }
}