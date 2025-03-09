const formUser = document.getElementById("formUser");
const txtNombre = document.getElementById("txtName");
const txtCorreo = document.getElementById("txtCorreo");
const txtPassword = document.getElementById("txtPassword");
const textPasswordRepeat = document.getElementById("txtPasswordRepeat");

const alerta = document.getElementById("alerta");

console.log(formUser);

formUser.addEventListener("submit", (e) => {
  e.preventDefault();

  if (txtPassword.value !== textPasswordRepeat.value) {
    alerta.hidden = false;
    alerta.innerHTML = "Las contraseñas no coinciden";
    //e.preventDefault();
    return;
  }

  if (!validateEmail(txtCorreo.value)) {
    alerta.hidden = false;
    alerta.innerHTML = "El correo no es valido";
    //e.preventDefault();
    return;
  }

  const credenciales = {
    name: txtNombre.value,
    correo: txtCorreo.value,
    password: txtPassword.value,
  };

  console.log(credenciales);
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
