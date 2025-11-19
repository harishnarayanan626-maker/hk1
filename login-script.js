// Correct credentials
const correctUsername = "shya";
const correctPassword = "shya626";

// Get form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value;
    
    // Check credentials
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Success! Redirect to the surprise page
        errorMessage.style.color = '#27ae60';
        errorMessage.textContent = '✓ Access granted! Loading surprise...';
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Wrong credentials
        errorMessage.style.color = '#e74c3c';
        errorMessage.textContent = '✗ Wrong username or password. Try again!';
        
        // Shake animation
        loginForm.style.animation = 'shake 0.5s';
        setTimeout(() => {
            loginForm.style.animation = '';
        }, 500);
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
