const form = document.getElementById("form");
const formName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário enviado! Entraremos em contato em breve.");
  formName.value = "";
  email.value = "";
  message.value = "";
});

document
  .querySelector(".hover-area")
  .addEventListener("mouseenter", function () {
    const targetWords = document.querySelectorAll(".underline-target");
    targetWords.forEach((word) => {
      word.classList.add("underline");
    });
  });

document
  .querySelector(".hover-area")
  .addEventListener("mouseleave", function () {
    const targetWords = document.querySelectorAll(".underline-target");
    targetWords.forEach((word) => {
      word.classList.remove("underline");
    });
  });
