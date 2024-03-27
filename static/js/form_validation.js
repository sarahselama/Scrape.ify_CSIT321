// <script>
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validatePersonalInformation()) {
      return false;
    }

    alert('Form submitted successfully!');
  });

  function validatePersonalInformation() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');

    if (!isValidInput(firstName)) {
      displayError(firstName, 'First Name is required.');
      return false;
    }

    if (!isValidInput(lastName)) {
      displayError(lastName, 'Last Name is required.');
      return false;
    }

    if (!isValidInput(email) || !isValidEmail(email.value)) {
      displayError(email, 'Please enter a valid email address.');
      return false;
    }

    if (!isValidInput(phone) || !isValidPhoneNumber(phone.value)) {
      displayError(phone, 'Please enter a valid phone number.');
      return false;
    }

    if (!isValidInput(address)) {
      displayError(address, 'Address is required.');
      return false;
    }

    return true;
  }

  function isValidInput(inputElement) {
    inputElement.addEventListener('input', function() {
      hideError(inputElement);
    });

    return inputElement.value.trim() !== '';
  }

  function isValidEmail(email) {
    // Add your email validation logic here
    // For simplicity, we're using a basic pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function isValidDebitCardNumber(cardNumber) {
    // Debit card number regex pattern
    var debitCardPattern = /^(?!.*(\d)(-|\1){14}\d$)\d{16}$/;

    return debitCardPattern.test(cardNumber);
}

  function isValidPhoneNumber(phone) {
    // Add your phone number validation logic here
    // For simplicity, we're checking if it's a numeric value
    return !isNaN(phone);
  }

  function displayError(inputElement, errorMessage) {
    var errorElement = inputElement.nextElementSibling;
    errorElement.textContent = errorMessage;
  }

  function hideError(inputElement) {
    var errorElement = inputElement.nextElementSibling;
    errorElement.textContent = '';
  }