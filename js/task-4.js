"use strict";
const form = document.querySelector(".login-form");

form.children[2].textContent = "Log in";

form.addEventListener("submit", toSubmit);

function toSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  password.setAttribute("autocomplete", "current-password");
  if (email.value === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
    this.reset();
  }
}
