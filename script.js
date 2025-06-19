// script.js

// Simple testimonial slider
const testimonials = [
    "\u201cNindot jud ang Anda!\u201d — Jane D.",
    "\u201cMakarelax og makalingaw ang mga baybayon!\u201d — Mark T.",
    "\u201cPerfect family getaway destination!\u201d — Lisa S.",
  ];
  
  let testimonialIndex = 0;
  const testimonialSlider = document.querySelector(".testimonial-slider");
  
  function showTestimonial() {
    testimonialSlider.innerHTML = `<p>${testimonials[testimonialIndex]}</p>`;
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  }
  
  setInterval(showTestimonial, 4000);
  showTestimonial();
  