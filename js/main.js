const hamburguer = document.getElementById('hamburguer');
const navLinks = document.getElementById('nav-links');

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio padrão

    // pega os campos pelo id
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const cidade = document.getElementById("cidade").value.trim();

    // validação bem básica
    if (!nome || !email || !cpf || !dataNascimento || !cep || !cidade) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // valida formato do CPF
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert("CPF inválido. Use o formato 000.000.000-00.");
      return;
    }

    // valida formato do CEP
    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(cep)) {
      alert("CEP inválido. Use o formato 00000-000.");
      return;
    }

    // se tudo estiver certo
    alert("Cadastro enviado com sucesso!");
    form.reset();
  });
});
