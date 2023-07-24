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

// Clearing the input fields and changing the input text to black

cardholderInput.addEventListener(`click`, function () {
  cardholderInput.value = ``;
  cardholderInput.style.color = `black`;
});
cardNumberInput.addEventListener(`click`, function () {
  cardNumberInput.value = ``;
  cardNumberInput.style.color = `black`;
});
expInputM.addEventListener(`click`, function () {
  expInputM.value = ``;
  expInputM.style.color = `black`;
});
expInputY.addEventListener(`click`, function () {
  expInputY.value = ``;
  expInputY.style.color = `black`;
});
cvcInput.addEventListener(`click`, function () {
  cvcInput.value = ``;
  cvcInput.style.color = `black`;
});

// function for checking valid cardholder name Input
function cardHolderNameCheck() {
  const cardholderValue = cardholderInput.value.trim(); // Remove leading and trailing spaces

  if (cardholderValue.length <= 2) {
    return false;
  } else if (!/^[a-zA-Z\s]+$/.test(cardholderValue)) {
    return false;
  } else if (cardholderValue === null || cardholderValue === undefined) {
    return false;
  } else {
    return true;
  }
}

// function for checking valid card number
function cardNumberCheck() {
  const cardNumber = cardNumberInput.value;

  if (isNaN(cardNumber)) {
    return false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    return false;
  } else {
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
  if (checkMonth() != true) {
    return false;
  } else if (checkYear() != true) {
    return false;
  } else {
    return true;
  }
}

//  function for checking valid cvc

function cvcCheck() {
  const cvc = cvcInput.value;

  if (isNaN(cvc)) {
    return false;
  } else if (cvc.length > 3 || cvc.length < 3) {
    return false;
  } else {
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

window.onbeforeunload = function () {
  return `Are you sure you want to leave?`;
};
