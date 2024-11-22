document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`Bienvenido, ${email}`);
    }
});