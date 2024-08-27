const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const cuerpo = document.getElementById("cuerpo");

function sendEmail() {
    const mensaje = `
            Nombre: ${nombre.value}<br>
            Email: ${email.value}<br>
            Mensaje: ${cuerpo.value}`;

    Email.send({
        SecureToken: "1c90d886-2ea8-4dc4-b78b-08da0fa140d6",
        To: 'lucianoarrieta077@gmail.com',
        From: "lucianoarrieta077@gmail.com",
        Subject: asunto.value,
        Body: mensaje
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                icon: "success",
                text: "El mensaje se ha enviado correctamente!"
              });
            nombre.value = '';
            email.value = '';
            asunto.value = '';
            cuerpo.value = '';

        } else {
            Swal.fire({
                icon: "error",
                text: "Ha ocurrido un error al enviar el mensaje. Por favor inténtelo de nuevo.",
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})