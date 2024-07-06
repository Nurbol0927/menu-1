document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const emailMessage = document.getElementById('emailMessage');
    const emailValue = emailInput.value;
    
    if (validateEmail(emailValue)) {
        emailMessage.textContent = 'Great';
        emailMessage.style.color = 'green';
      
    } else {
        emailMessage.textContent = 'not true';
        emailMessage.style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
