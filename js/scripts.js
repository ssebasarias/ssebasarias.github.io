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

// ===============================
//      CERTIFICADOS CARRUSEL
// ===============================

const certificatesData = [
    { img: 'assets/img/certificados/cert1.jpg', title: 'Curso Básico de Programación' },
    { img: 'assets/img/certificados/cert2.jpg', title: 'Python' },
    { img: 'assets/img/certificados/cert3.jpg', title: 'Curso de Computación Básica' },
    { img: 'assets/img/certificados/cert5.jpg', title: 'Entorno con Jupyter y Anaconda' },
    { img: 'assets/img/certificados/cert6.jpg', title: 'Curso de Frontend Developer' },
    { img: 'assets/img/certificados/cert8.jpg', title: 'Curso de Git y GitHub' },
    { img: 'assets/img/certificados/cert9.jpg', title: 'Terminal y Línea de Comandos' },
    { img: 'assets/img/certificados/cert10.jpg', title: 'Gestión de NPM' },
    { img: 'assets/img/certificados/cert11.jpg', title: 'Algoritmos y Diagramas de Flujo' },
    { img: 'assets/img/certificados/cert13.jpg', title: 'Práctico Frontend Developer' },
    { img: 'assets/img/certificados/cert14.jpg', title: 'Práctico JavaScript' },
  ];
  
  let currentSlide = 0;
  const perPage = 9;
  const container = document.getElementById("cert-container");
  
  function renderCertificates(startIndex) {
    container.innerHTML = '';
    const items = certificatesData.slice(startIndex, startIndex + perPage);
    items.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `<img src="${cert.img}" alt="${cert.title}">`;
      container.appendChild(card);
    });
  }
  
  document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide - perPage >= 0) {
      currentSlide -= perPage;
      renderCertificates(currentSlide);
    }
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide + perPage < certificatesData.length) {
      currentSlide += perPage;
      renderCertificates(currentSlide);
    }
  });
  
  renderCertificates(currentSlide);
  
  // ===============================
  //            MODAL
  // ===============================
  
  container.addEventListener("click", (e) => {
    const card = e.target.closest(".cert-card");
    if (!card) return;
  
    const img = card.querySelector("img");
    const imgSrc = img.src;
    const title = img.alt;
  
    showModal(imgSrc, title);
  });
  
  function showModal(imgSrc, titleText) {
    const modal = document.createElement("div");
    modal.className = "cert-modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${imgSrc}" alt="${titleText}">
      </div>
    `;
  
    document.body.appendChild(modal);
  
    modal.querySelector(".close").addEventListener("click", () => {
      modal.remove();
    });
  
    // Cierra el modal al hacer click fuera de la imagen
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  