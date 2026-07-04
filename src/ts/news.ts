// news.ts — News page entry point with subscribe form
import '../styles/main.css'

import { showToast } from './main'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribe-form') as HTMLFormElement | null
  const emailInput = document.getElementById('subscribe-email') as HTMLInputElement | null

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = emailInput?.value.trim() ?? ''
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput?.classList.add('error')
      emailInput?.focus()
      return
    }
    emailInput?.classList.remove('error')
    // Store in localStorage as placeholder (no backend needed)
    const existing = JSON.parse(localStorage.getItem('et-subscribers') ?? '[]') as string[]
    if (!existing.includes(email)) {
      existing.push(email)
      localStorage.setItem('et-subscribers', JSON.stringify(existing))
    }
    form.reset()
    showToast('Вы подписались на новости! Спасибо 🎉', 'success')
  })
})
