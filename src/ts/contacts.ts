// contacts.ts — Contacts page with form validation
import '../styles/main.css'
import '../styles/components.css'
import { showToast } from './main'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null
  const submitText = document.getElementById('submit-text')

  if (!form) return

  // Client-side validation before Formspree submit
  form.addEventListener('submit', async (e) => {
    const name    = (form.querySelector('#contact-name') as HTMLInputElement)?.value.trim()
    const email   = (form.querySelector('#contact-email') as HTMLInputElement)?.value.trim()
    const message = (form.querySelector('#contact-message') as HTMLTextAreaElement)?.value.trim()

    let valid = true

    if (!name) {
      highlightError('contact-name')
      valid = false
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      highlightError('contact-email')
      valid = false
    }
    if (!message) {
      highlightError('contact-message')
      valid = false
    }

    if (!valid) {
      e.preventDefault()
      showToast('Пожалуйста, заполните обязательные поля', 'info')
      return
    }

    // Let Formspree handle submission naturally (no e.preventDefault for real submit)
    if (submitBtn && submitText) {
      submitBtn.disabled = true
      submitText.textContent = 'Отправляем...'
    }
  })

  function highlightError(id: string): void {
    const el = document.getElementById(id)
    if (!el) return
    el.style.borderColor = 'var(--clr-warning)'
    el.focus()
    el.addEventListener('input', () => {
      el.style.borderColor = ''
    }, { once: true })
  }

  // Handle Formspree success redirect (check URL param)
  if (window.location.search.includes('success')) {
    showToast('Сообщение отправлено! Свяжемся с вами в ближайшее время.', 'success')
  }
})
