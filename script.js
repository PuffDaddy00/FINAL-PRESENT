const modal = document.getElementById('forgot-modal');
const forgotLink = document.getElementById('forgot-link');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Login form elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// When the user clicks on the link, open the modal
forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username and password match your criteria
    if (username === '123' && password === '1234') {
        // Redirect to index4.html if credentials are correct
        window.location.href = 'index4.html';
    } else {
        // Show an alert if credentials are incorrect
        alert('Incorrect username or password. Please try again.');
    }
});

// Handle the "Send" button inside the modal
const sendBtn = document.getElementsByClassName('send-btn')[0];

sendBtn.addEventListener('click', () => {
    const emailInput = document.getElementsByClassName('email-input')[0];
    if (emailInput.value) {
        alert('A password reset link has been sent to ' + emailInput.value);
        modal.style.display = 'none';
    } else {
        alert('Please enter your email address.');
    }
});