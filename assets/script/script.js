(function () {
  // Inicialize o EmailJS com sua Public Key
  emailjs.init({
    publicKey: "KhzZBc_Dnj0okkGah",
  });
})();

// Manipule o envio do formulário
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Envie o formulário usando EmailJS
  emailjs.sendForm("service_orj6q9c", "template_rj6j56d", this).then(
    function () {
      alert("Mensagem enviada com sucesso!");
      document.getElementById("form").reset(); // Limpa o formulário
    },
    function (error) {
      alert("Erro ao enviar a mensagem: " + JSON.stringify(error));
    }
  );
});
