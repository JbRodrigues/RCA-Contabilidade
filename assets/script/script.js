const form = document.getElementById("form");
const formName = document.getElementById("nome");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário enviado! Entraremos em contato em breve.");
  formName.value = "";
  email.value = "";
  message.value = "";
});



