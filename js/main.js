// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (nombre === '' || telefono === '') {
        alert('Por favor, complete todos los campos.');
        event.preventDefault(); // Prevent form submission
    }
});
