import { useState, useEffect } from 'react'
import { slidesData } from '../data/slidesData'
import { Slide } from './Slide'
import { Navigation } from './Navigation'
import { ProgressBar } from './ProgressBar'
import '../styles/slideshow.css'
import '../styles/animations.css'

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const handleNext = () => {
    if (currentSlide < slidesData.length) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext()
    } else if (e.key === 'ArrowLeft') {
      handlePrevious()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  return (
    <div className="slideshow-container">
      <ProgressBar current={currentSlide} total={slidesData.length} />

      <div className="slides-wrapper">
        {slidesData.map((s) => (
          <Slide key={s.id} slide={s} isActive={s.id === currentSlide} />
        ))}
      </div>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  )
}
