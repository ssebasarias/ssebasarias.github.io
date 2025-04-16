// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Dynamic year update for footer
const yearElement = document.querySelector('footer p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = `&copy; ${currentYear} Sebastian Guerrero. All rights reserved.`;
}

// ProjectPage

function openModal(src) {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-iframe');
    iframe.src = src; // Cargar el contenido en el iframe
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-iframe');
    iframe.src = ''; // Limpiar el contenido del iframe
    modal.style.display = 'none';
  }