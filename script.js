const toLogin = document.getElementById('toLogin');
const toRegister = document.getElementById('toRegister');
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');

// Switch to login form
toLogin.addEventListener('click', () => {
    registrationForm.style.transform = 'rotateY(180deg)';
    loginForm.style.transform = 'rotateY(0deg)';
});

// Switch to registration form
toRegister.addEventListener('click', () => {
    registrationForm.style.transform = 'rotateY(0deg)';
    loginForm.style.transform = 'rotateY(180deg)';
});
