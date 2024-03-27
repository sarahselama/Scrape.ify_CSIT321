// to get current year
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerText = currentYear;
// switching between credit card and cashon delviery 
$(document).ready(function(){
    $("#payment_card").hide();
    $("input[name='payment_option']").change(function(){
      var selectedOption = $(this).val();
      if(selectedOption === 'creditcard'){
        $("#payment_card").show();
      } else {
        $("#payment_card").hide();
      }
    });
  });

// for pro page datatypes
  $('input[name="data_types"]').change(function(){
        if ($('input[name="data_types"]:checked').length > 3) {
          $(this).prop('checked', false);
          alert("You can only choose up to 3 options with Basic plan!");

        }
      });

  var myModal = new bootstrap.Modal(document.getElementById('myModal'));

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validatePersonalInformation()) {
        return false;
    }

    var paymentMethod = document.querySelector('input[name="payment_option"]:checked').value;

    if (paymentMethod === 'creditcard') {
        if (!validateCreditCard()) {
            return false;
        }
    }
    // alert('form succecced')
        myModal.show();
});

function validatePersonalInformation() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var webb_scraper = document.getElementById('webb_scraper_info');
    var site_links = document.getElementById('site_links');

    if (!isValidInput(firstName)) {
        displayError(firstName, 'First Name is required.');
        return false;
    }

    if (!isValidInput(lastName)) {
        displayError(lastName, 'Last Name is required.');
        return false;
    }

    if (!isValidEmail(email.value)) {
        if (!isValidEmailPattern(email.value)) {
            displayError(email, 'Email pattern is incorrect.');
        } else {
            displayError(email, 'Please enter a valid email address.');
        }
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

    if (!isValidInput(webb_scraper)) {
        displayError(webb_scraper, 'Type something about web scraper');
        return false;
    }

    if (!isValidInput(site_links)) {
        displayError(site_links, 'Type 1-2 website links to be scraped!');
        return false;
    }

    return true;
}

function validateCreditCard() {
    var cardNo = document.getElementById('cardNo').value;
    var expiration = document.getElementById('expiration').value;
    var securityCode = document.getElementById('securityCode').value;

    if(cardNo==""){
        displayError(document.getElementById('cardNo'), 'Card No should Not be Empty!.');
        return false;
    }
    else {
        hideError(document.getElementById('cardNo'));
    }
    

    if (!isValidDebitCardNumber(cardNo)) {
        displayError(document.getElementById('cardNo'), 'Card No should be 14 -16 digits.');
        return false;
    } else {
        hideError(document.getElementById('cardNo'));
    }

    if (!isValidExpiration(expiration)) {
        displayError(document.getElementById('expiration'), 'Expiration should be a maximum of 4 digits.');
        return false;
    } else {
        hideError(document.getElementById('expiration'));
    }

    if (!isValidSecurityCode(securityCode)) {
        displayError(document.getElementById('securityCode'), 'Security Code should be a maximum of 3 digits.');
        return false;
    } else {
        hideError(document.getElementById('securityCode'));
    }

    return true;
}

function isValidDebitCardNumber(cardNumber) {
    // var debitCardPattern = /^(?!.*(\d)(-|\1){14}\d$)\d{16}$/;
    var debitCardPattern = /^(?!.*(\d)(-|\1){14}\d$)\d{14,16}$/;
    return debitCardPattern.test(cardNumber);
}

function isValidExpiration(expiration) {
    return /^\d{1,4}$/.test(expiration);
}

function isValidSecurityCode(securityCode) {
    return /^\d{1,3}$/.test(securityCode);
}

function isValidInput(inputElement) {
    inputElement.addEventListener('input', function() {
        hideError(inputElement);
    });

    return inputElement.value.trim() !== '';
}

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
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

function isValidEmailPattern(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidCheckboxSelection(dataTypes) {
    for (var i = 0; i < dataTypes.length; i++) {
        if (dataTypes[i].checked) {
            return true;
        }
    }
    return false;
}

function isValidCheckboxLimit(dataTypes) {
    var checkedCount = 0;
    for (var i = 0; i < dataTypes.length; i++) {
        if (dataTypes[i].checked) {
            checkedCount++;
        }
    }
    return checkedCount <= 3;
}
