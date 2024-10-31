const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
console.log(span.textContent);
input.addEventListener("input", onInput);

function onInput(evt) {
  console.log(evt.currentTarget.value);
  if (evt.currentTarget.value && evt.currentTarget.value !== " ") {
    span.textContent = evt.currentTarget.value.trim();
  } else span.textContent = "Anonimus";
}
