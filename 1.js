function changeSlide(event, slideId) {
    event.preventDefault(); // Evita el desplazamiento de la página
    
    // Oculta todos los slides
    const slides = document.querySelectorAll('.itemcarrusel');
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Muestra el slide seleccionado
    const selectedSlide = document.getElementById(slideId);
    selectedSlide.style.display = 'block';
    
    // Resalta el punto de navegación correspondiente
    const dots = document.querySelectorAll('.dot-link');
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    const selectedDot = document.querySelector(`a[href="${slideId}"]`);
    selectedDot.classList.add('active');
  }
  

  