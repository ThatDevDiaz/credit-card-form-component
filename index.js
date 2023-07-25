`use strict`;

// defining const variables
const confirmBtn = document.getElementById(`confirm-btn`);
const cardFormStart = document.getElementById(`card-fields`);
const cardFormCompleted = document.getElementById(`card-fields-completed`);

// targeting all inputs creating an array
let input = document.querySelectorAll(`input`);

// declaring the individual input fields
let cardholderInput = document.getElementById(`cardholderInput`);
let cardNumberInput = document.getElementById(`cardNumberInput`);
let expInputM = document.getElementById(`expInputM`);
let expInputY = document.getElementById(`expInputY`);
let cvcInput = document.getElementById(`cvcInput`);

// Declaring the card image fields
let cardImageName = document.getElementById(`namePlaceholder`);
let cardImageNumber = document.getElementById(`numberPlaceholder`);
let cardImageDates = document.getElementById(`expirationPlaceholder`);

// Declaring the errors
let nameError = document.getElementById(`invalidName`);
let cardError = document.getElementById(`invalidCard`);
let dateError = document.getElementById(`invalidDate`);
let cvcError = document.getElementById(`invalidCvc`);

// Clearing the input fields and changing the input text to black, will only clear them initially and will not clear the user's input if they have to click in it again to correct something

cardholderInput.addEventListener(`click`, function () {
  if (cardholderInput.value == `e.g. Jane Appleseed`) {
    cardholderInput.value = ``;
  }
  cardholderInput.style.color = `black`;
});
cardNumberInput.addEventListener(`click`, function () {
  if (cardNumberInput.value == `e.g. 1234 5678 9123 0000`) {
    cardNumberInput.value = ``;
  }
  cardNumberInput.style.color = `black`;
});
expInputM.addEventListener(`click`, function () {
  if (expInputM.value == `MM`) {
    expInputM.value = ``;
  }
  expInputM.style.color = `black`;
});
expInputY.addEventListener(`click`, function () {
  if (expInputY.value == `YYYY`) {
    expInputY.value = ``;
  }
  expInputY.style.color = `black`;
});
cvcInput.addEventListener(`click`, function () {
  if (cvcInput.value == `e.g. 123`) {
    cvcInput.value = ``;
  }
  cvcInput.style.color = `black`;
});

// function for checking valid cardholder name Input
function cardHolderNameCheck() {
  const cardholderValue = cardholderInput.value.trim(); // Remove leading and trailing spaces
  let nameErrorMessage = (nameError.style.display = `block`);
  if (cardholderValue.length <= 2) {
    nameErrorMessage;
    return false;
  } else if (!/^[a-zA-Z\s]+$/.test(cardholderValue)) {
    nameErrorMessage;
    return false;
  } else if (cardholderValue === null || cardholderValue === undefined) {
    nameErrorMessage;
    return false;
  } else {
    nameError.style.display = `none`;
    return true;
  }
}

// function for checking valid card number
function cardNumberCheck() {
  const cardNumber = cardNumberInput.value;
  let cardErrorMessage = (cardError.style.display = `block`);
  if (isNaN(cardNumber)) {
    cardErrorMessage;
    return false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    cardErrorMessage;
    return false;
  } else {
    cardError.style.display = `none`;
    return true;
  }
}

// function for checking valid EXP dates. First I will check to see if the month is valid with its own function, then year with its own function, and the final check date function will make sure both of these functions return true. If either returns false it will not pass the date check.

function checkMonth() {
  const month = expInputM.value;

  if (isNaN(month)) {
    return false;
  } else if (month.length > 12 || month.length <= 0) {
    return false;
  } else {
    return true;
  }
}
function checkYear() {
  const year = expInputY.value;

  if (isNaN(year)) {
    return false;
  } else if (year < 2023 || year > 2033) {
    return false;
  } else {
    return true;
  }
}

function checkDates() {
  let dateErrorMessage = (invalidDate.style.display = `block`);
  if (checkMonth() != true) {
    dateErrorMessage;
    return false;
  } else if (checkYear() != true) {
    dateErrorMessage;
    return false;
  } else {
    invalidDate.style.display = `none`;
    return true;
  }
}

//  function for checking valid cvc

function cvcCheck() {
  const cvc = cvcInput.value;
  let cvcErrorMessage = (cvcError.style.display = `block`);
  if (isNaN(cvc)) {
    cvcErrorMessage;
    return false;
  } else if (cvc.length > 3 || cvc.length < 3) {
    cvcErrorMessage;
    return false;
  } else {
    cvcError.style.display = `none`;
    return true;
  }
}

// event listener for confirm btn
confirmBtn.addEventListener(`click`, function () {
  if (cardHolderNameCheck() != true) {
    console.log(`failed name check`);
  } else if (cardNumberCheck() != true) {
    console.log(`failed number check`);
  } else if (checkDates() != true) {
    console.log(`failed expiration date check`);
  } else if (cvcCheck() != true) {
    console.log(`failed cvc check`);
  } else {
    cardFormStart.style.display = `none`;
    cardFormCompleted.style.display = `block`;
  }

  // inputBorder[0].style.borderColor = `red`;
});

// Confirm reload  ?

// window.onbeforeunload = function () {
//   return `Are you sure you want to leave?`;
// };
