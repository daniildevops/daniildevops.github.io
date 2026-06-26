// production.ts — Gallery page entry point
import './main'
import type { GalleryImage } from './gallery'
import { initGallery } from './gallery'


const images: GalleryImage[] = [
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/WhatsApp-Image-2023-08-09-at-17.54.39-1024x768.jpeg', alt: 'Производство ЭлектроТехнологии' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/WhatsApp-Image-2023-08-09-at-17.54.47-1024x768.jpeg', alt: 'Производство ЭлектроТехнологии' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/WhatsApp-Image-2023-08-09-at-17.54.52-1024x768.jpeg', alt: 'Производство ЭлектроТехнологии' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/IMG_6864-1024x683.jpg', alt: 'Оборудование ЭлектроТехнологии' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190813_173936-1024x768.jpg', alt: 'Монтаж оборудования' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20191209_164551-1024x498.jpg', alt: 'Щит постоянного тока' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190416_112722-1024x498.jpg', alt: 'Производственный цех' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/IMG_9858-1024x768.jpg', alt: 'Готовое оборудование' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190323_154935-1024x498.jpg', alt: 'Сборка оборудования' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20200601_195830-1024x768.jpg', alt: 'Производство' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20200618_201500-1024x768.jpg', alt: 'Тестирование оборудования' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190419_092541-1024x498.jpg', alt: 'Монтаж на объекте' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190522_101928-1024x498.jpg', alt: 'Производственное оборудование' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/03/20190430_200726-1024x498.jpg', alt: 'Электрооборудование' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/IMG_6964-1024x683.jpg', alt: 'Производственный процесс' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/689227e2-d1f8-442e-98cc-a15ab28b5427-1024x768.jpg', alt: 'Готовое изделие' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/c2bbd10f-933c-46ab-9fe9-8adc2c616c14-1024x768.jpg', alt: 'Электронные компоненты' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/d7a50a55-377d-43bb-8dbe-828030742a1b-1024x768.jpg', alt: 'Системы питания' },
  { src: 'https://electricalsystem.ru/wp-content/uploads/2025/08/8ccfd485-b98a-49da-848c-1bc44f5864d4-1024x768.jpg', alt: 'Производственная линия' },
]

document.addEventListener('DOMContentLoaded', () => {
  initGallery(images)
})
