// ================================================================
//  MAIN TypeScript entry — shared across all pages
//  Handles: theme, navbar, mobile menu, scroll-reveal, counters
// ================================================================

import '../styles/main.css'
import '../styles/components.css'

// ── Theme ─────────────────────────────────────────────────────────
// ── Navbar ────────────────────────────────────────────────────────
function initNavbar(): void {
  const navbar  = document.querySelector<HTMLElement>('.navbar')
  const burger  = document.getElementById('burger')
  const mobileNav = document.getElementById('nav-mobile')

  // Scrolled shadow
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })

  // Mobile menu
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open')
    mobileNav?.classList.toggle('open')
    document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : ''
  })

  // Close on link click
  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger?.classList.remove('open')
      mobileNav.classList.remove('open')
      document.body.style.overflow = ''
    })
  })

  // Active link highlight
  const path = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = (a as HTMLAnchorElement).getAttribute('href') ?? ''
    if (href === path || (path === 'index.html' && href === './') || (path === '' && href === './')) {
      a.classList.add('active')
    }
  })
}

// ── Scroll Reveal ─────────────────────────────────────────────────
function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  elements.forEach(el => observer.observe(el))
}

// ── Animated Counters ─────────────────────────────────────────────
function animateCounter(el: HTMLElement, target: number, suffix: string, duration = 1600): void {
  const start = performance.now()
  const update = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target) + suffix
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-counter]')
  if (!counters.length) return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement
        const target  = parseInt(el.dataset.counter ?? '0', 10)
        const suffix  = el.dataset.suffix ?? ''
        animateCounter(el, target, suffix)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.5 })

  counters.forEach(el => observer.observe(el))
}

// ── Smooth scroll for anchor links ────────────────────────────────
function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href')!.slice(1)
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

// ── Toast notification ────────────────────────────────────────────
export function showToast(message: string, type: 'success' | 'info' = 'success'): void {
  const existing = document.querySelector('.toast')
  existing?.remove()

  const toast = document.createElement('div')
  toast.className = `toast toast-${type}`
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
    <span>${message}</span>
  `
  document.body.appendChild(toast)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'))
  })
  setTimeout(() => {
    toast.classList.remove('show')
    setTimeout(() => toast.remove(), 400)
  }, 4000)
}

// ── Init ──────────────────────────────────────────────────────────
initNavbar()
initScrollReveal()
initCounters()
initSmoothScroll()
