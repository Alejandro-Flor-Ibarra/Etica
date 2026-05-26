interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
}

export function Navigation({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) {
  return (
    <div className="navigation">
      <button
        className="nav-button prev-button"
        onClick={onPrevious}
        disabled={currentSlide === 1}
        aria-label="Diapositiva anterior"
      >
        <span className="nav-icon">←</span>
      </button>

      <div className="slide-counter">
        <span className="current">{currentSlide}</span>
        <span className="separator">/</span>
        <span className="total">{totalSlides}</span>
      </div>

      <button
        className="nav-button next-button"
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        aria-label="Siguiente diapositiva"
      >
        <span className="nav-icon">→</span>
      </button>
    </div>
  )
}
