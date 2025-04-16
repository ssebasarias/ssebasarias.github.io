// Modal functions
function openModal(src) {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-iframe');
    iframe.src = src;
    modal.style.display = 'block';
  
    // Cerrar clic fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('modal-iframe');
    iframe.src = '';
    modal.style.display = 'none';
  }
  