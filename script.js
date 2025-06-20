const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const signupToggle = document.querySelector('.signup-toggle');
const loginToggle = document.querySelector('.login-toggle');

if (signupToggle) {
  signupToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default button behavior
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
  });
}

if (loginToggle) {
  loginToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default button behavior
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logged in!');
    // Add your login logic here
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signed up!');
    // Add your signup logic here
  });
}