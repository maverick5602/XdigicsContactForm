// Code for smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // To Validate the form entries 
  document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const msg = document.querySelector('textarea[name="msg"]').value;

    if (!name || !email || !phone || !msg) {
      alert('Please fill in all fields.');
      e.preventDefault();
    }
  });

 // Select the email input and error message elements
const emailInput = document.querySelector('input[name="email"]');
const errorMessage = document.querySelector('.error-message');

// Add an event listener to validate on input change
emailInput.addEventListener('change', (event) => {
  const email = event.target.value;
  const validEmail = email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  if (validEmail) {
    // Email is valid, remove any previous error messages
    errorMessage.textContent = ''; // Clear any previous error message
  } else {
    // Email is invalid, display an error message
    errorMessage.textContent = 'Please enter a valid email address.';
  }
});

// Add form validation to prevent submission if email is invalid
const form = document.querySelector('form'); // Assuming the email input is within a form
form.addEventListener('submit', (event) => {
  if (!emailInput.validity.valid) {
    event.preventDefault(); // Prevent form submission
    errorMessage.textContent = 'Please enter a valid email address.';
  }
});




function validateAndSavePDF() {
  var emailInput = document.getElementById('email').value;

  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(emailInput)) {
      document.getElementById('error-message').innerHTML = '';

      // Convert the form to a PDF and trigger Save As dialog
      saveAsPDF();

      return false; // Prevent form submission
    } else {
      document.getElementById('error-message').innerHTML = 'Invalid email address';
      return false; // Prevent form submission
  }
}

function saveAsPDF() {
  var element = document.getElementById('myForm'); // Change this to the ID of the container you want to convert to PDF

  html2pdf(element, {
      margin: 10,
      filename: 'form_data.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });
}