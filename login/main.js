document.getElementById('hamburger-menu').addEventListener('click', () => {
    const navMenu = document.querySelector('nav');

    if (navMenu.classList.contains('DEMA-active')) {
        navMenu.classList.remove('DEMA-active');
        navMenu.classList.add('DEMA-close'); 
    } else {
        navMenu.classList.remove('DEMA-close'); 
        navMenu.classList.add('DEMA-active'); 
    }
});

document.querySelector('.DEMA-login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`Bienvenido, ${email}`);
    }
});

document.getElementById('register-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});
