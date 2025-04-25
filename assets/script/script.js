require("dotenv").config();
(function () {
  // Inicialize o EmailJS com sua Public Key
  emailjs.init({
    publicKey: process.env.EmailJS_PK,
  });
})();

// Manipule o envio do formulário
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Envie o formulário usando EmailJS
  emailjs
    .sendForm(
      process.env.EMAILJS_SERVICEID,
      process.env.EMAILJS_TEMPLATEID,
      this
    )
    .then(
      function () {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("form").reset(); // Limpa o formulário
      },
      function (error) {
        alert("Erro ao enviar a mensagem: " + JSON.stringify(error));
      }
    );
});
