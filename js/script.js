let time = 4500,
  imageIndex = 0,
  verificado = false,
  images = document.querySelectorAll("#carrossel img"),
  spans = document.querySelectorAll("#form span small");
max = images.length;

function proximaImagem() {
  images[imageIndex].classList.remove("selecionada");

  imageIndex++;

  if (imageIndex > 2) imageIndex = 0;

  images[imageIndex].classList.add("selecionada");
}

function inicioCarrossel() {
  setInterval(() => {
    proximaImagem();
  }, time);
}

function clicado() {
  if (verificado === true) {
    alert("Seu cadastro foi realizado com sucesso!");
  } else alert("Insira as informações necessárias para completar o cadastro");
}

function campoUser() {
  const user = document.getElementById("user");
  const spanUser = document.getElementById("small-user");

  //Insira um usuário válido, que deve conter pelo menos 8 caracteres

  if (user.value.length <= 8) {
    console.log("Campo usuário inválido!");
    spanUser.innerHTML =
      "Insira um usuário válido, que deve conter pelo menos 8 caracteres";
  } else {
    spanUser.innerHTML = "";
    verificado = true;
  }
}

function campoEmail() {
  const email = document.getElementById("email");
  const re = /\S+@\S+\.\S+/;
  const comparacao = re.test(email.value);
  const spanEmail = document.getElementById("small-email");

  //Digite um e-mail válido no formato "user@email.com"

  if ((email.value.length <= 10) & (comparacao == false)) {
    console.log("Campo e-mail inválido!");
    spanEmail.innerHTML = "Digite um e-mail válido no formato 'user@email.com'";
  } else {
    spanEmail.innerHTML = "";
    verificado = true;
  }
}

function campoSenha() {
  const pass = document.getElementById("pass");
  const spanSenha = document.getElementById("small-senha");

  //Insira uma senha válida, que deve conter pelo menos 8 caracteres

  if (pass.value.length < 8) {
    console.log("Comprimento de senha inválido!");
    spanSenha.innerHTML =
      "Insira uma senha válida, que deve conter pelo menos 8 caracteres";
  } else {
    spanSenha.innerHTML = "";
    verificado = true;
  }
}

window.addEventListener("load", inicioCarrossel);
