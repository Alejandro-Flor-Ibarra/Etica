import type { Slide as SlideType } from '../data/slidesData'
import '../styles/slideshow.css'

interface SlideProps {
  slide: SlideType
  isActive: boolean
}

export function Slide({ slide, isActive }: SlideProps) {
  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      <div className="slide-background">
        <img src={slide.image} alt={slide.title} className="slide-image" />
        <div className="slide-overlay"></div>
      </div>

      <div className="slide-content">
        <div className="slide-text">
          {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
          <h1 className={`slide-title ${slide.highlightColor ? 'highlight-' + slide.highlightColor : ''}`}>
            {slide.title}
          </h1>

          <div className="slide-body">
            {slide.content.map((paragraph, idx) => (
              <p key={idx} className="slide-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
