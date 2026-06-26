// ================================================================
//  GALLERY LIGHTBOX — production.html
// ================================================================

export type GalleryImage = {
  src: string
  alt: string
}

export function initGallery(images: GalleryImage[]): void {
  let currentIndex = 0

  // Build lightbox DOM
  const lb = document.createElement('div')
  lb.className = 'lightbox'
  lb.id = 'lightbox'
  lb.innerHTML = `
    <button class="lightbox-close" id="lb-close" aria-label="Закрыть">✕</button>
    <button class="lightbox-prev" id="lb-prev" aria-label="Предыдущее">‹</button>
    <img class="lightbox-img" id="lb-img" src="" alt="" />
    <button class="lightbox-next" id="lb-next" aria-label="Следующее">›</button>
  `
  document.body.appendChild(lb)

  const lbImg  = lb.querySelector<HTMLImageElement>('#lb-img')!
  const lbClose = lb.querySelector<HTMLButtonElement>('#lb-close')!
  const lbPrev  = lb.querySelector<HTMLButtonElement>('#lb-prev')!
  const lbNext  = lb.querySelector<HTMLButtonElement>('#lb-next')!

  function open(index: number): void {
    currentIndex = (index + images.length) % images.length
    lbImg.src = images[currentIndex].src
    lbImg.alt = images[currentIndex].alt
    lb.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  function close(): void {
    lb.classList.remove('open')
    document.body.style.overflow = ''
  }

  lbClose.addEventListener('click', close)
  lbPrev.addEventListener('click', () => open(currentIndex - 1))
  lbNext.addEventListener('click', () => open(currentIndex + 1))

  lb.addEventListener('click', e => { if (e.target === lb) close() })

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return
    if (e.key === 'Escape')      close()
    if (e.key === 'ArrowLeft')   open(currentIndex - 1)
    if (e.key === 'ArrowRight')  open(currentIndex + 1)
  })

  // Attach to gallery items
  document.querySelectorAll<HTMLElement>('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => open(i))
  })
}
