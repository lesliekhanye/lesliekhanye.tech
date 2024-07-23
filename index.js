document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#type_writer', {
        strings: ["Full Stack <span class='blue-text'>Developer</span>"],
        typeSpeed: 150,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contact-btn');
    const popupOverlay = document.getElementById('popup-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = document.getElementById('contact-form');
  
    contactBtn.addEventListener('click', function() {
      popupOverlay.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
    });
  
    popupOverlay.addEventListener('click', function(event) {
      if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
      }
    });
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      console.log('Form submitted');
      alert('Thank you for your message!');
      popupOverlay.style.display = 'none';
    });
  });