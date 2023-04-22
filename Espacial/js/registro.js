const inpApellido = document.getElementById("inpt-apellido");
const inpNombre = document.getElementById("inpt-nombres");
const inpEdad = document.getElementById("inpt-edad");
const inpUsuario = document.getElementById("inpt-user");
const inpEmail = document.getElementById("inpt-email");
const inpTipo = document.getElementById("inpt-tipoUser");

const barProg = document.getElementById("pbar-progreso");

const inpEnviar = document.getElementById("btn-Submit");

const requiredElements = document.querySelectorAll("[required]");

const regExText = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]*$/;
const regExNum = /^[0-9]{0,3}$/;
const regExUser =/^[a-zA-Z1-9]{5,25}$/;
/* const regExMail =/^[a-zA-Z0-9.!#$%&/()=?+{}.-,"*=/^-_.:,;|°¬]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; */ /* REHACER */
const regExTipoUser = /Avanzado|Medio|Novato/;

requiredElements.forEach(element => {
    element.addEventListener("input",()=>{
       if (element.validity.valid) {
        element.style.backgroundColor = "#ffffff";
        
        
       } else {
        element.style.backgroundColor = "#ffb2c3";
        
       } 

    })
        
});


function validar() {
    if (inpEmail.validity.valid) {
        barProg.setAttribute("value", barProg.value+1);
       
        
    } else {
        alert("Completar los campos correctamente");
    }
    
   
}







