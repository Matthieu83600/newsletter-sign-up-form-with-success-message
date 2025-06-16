"use strict";

const newsletter = document.querySelector(".newsletter");
const emailInput = document.querySelector(".form__input");
const submitButton = document.querySelector(".form__submit");
const errorMessage = document.querySelector(".form__error-msg");

const successMessage = document.querySelector(".success");
const successButton = document.querySelector(".success__btn");

let errorTimeout;

const submitForm = (e) => {
  e.preventDefault();
  clearTimeout(errorTimeout);
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)) {
    newsletter.classList.add("hidden");
    successMessage.classList.remove("hidden");
  } else {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("form__input--error");
    emailInput.setAttribute("aria-invalid", "true");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
      emailInput.classList.remove("form__input--error");
      emailInput.removeAttribute("aria-invalid");
    }, 2000);
  }
};

const returnToNewsletter = () => {
  successMessage.classList.add("hidden");
  newsletter.classList.remove("hidden");
  emailInput.value = "";
};

submitButton.addEventListener("click", submitForm);
successButton.addEventListener("click", returnToNewsletter);
