//Fecha y Hora
// Formatear 1 en 01
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

// Crea el Intervalo
const interval = setInterval(() => {
    // Obtiene la fecha
    const now = new Date();

    // Formatear fecha como dd/mm/aaaa hh:ii:ss
    const dateTime = zeroFill((now.getUTCDate() + 1)) + '/' + zeroFill(now.getMonth()) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Desplegar la fecha en el documento
    document.getElementById('fecha').innerHTML = dateTime;
}, 1000);

//Variables

const textoSeleccione = document.querySelector("#textoSeleccion");
const usuarioAna = document.querySelector("#ana");
const usuarioPedro = document.querySelector("#pedro");
const usuarioVeronica = document.querySelector("#veronica");
const recuadroTeclado = document.querySelector("#right");
const recuadroOpciones = document.querySelector("#opciones");
const pantallaEntrada = document.querySelector("#entrada");
const pantallaSalida = document.querySelector("#ventana");
const btnCancelar = document.querySelector("#cancelar");
const btnCorregir = document.querySelector("#corregir");
const btnAceptar = document.querySelector("#aceptar");
const esteEsElBueno = document.querySelector("#selectedUser");
const imgSeleccionada = document.querySelector("#imgSel");
const pSeleccionado = document.querySelector("#pSel");
const btnSaldo = document.querySelector("#saldo");
const btnRetiro = document.querySelector("#retiro");
const btnDeposito = document.querySelector("#deposito");


let usuarioSeleccionado = "";
let password = "";
let estatus = "inicio";
let contador = 1;
let saldo = 0;

//Funciones

function reinicia() {
    textoSeleccion.innerHTML = "Seleccione su Usuario:"
    recuadroOpciones.style.display = "none";
    recuadroTeclado.style.display = "none";
    usuarioAna.style.display = "";
    usuarioPedro.style.display = "";
    usuarioVeronica.style.display = "";
    esteEsElBueno.style.display = "none";
    pantallaEntrada.value = "";
    pantallaSalida.value = "";
    usuarioSeleccionado = "";
    password = "";
    estatus = "inicio";
    contador = 1;
    saldo = 0;   
}

function identificaPassword() {
    
    for (let i = 0; i <= datosUsuarios.length; i++) {
        if (usuarioSeleccionado === datosUsuarios[i].nombre) {
            return password = datosUsuarios[i].nip;
        }
    }
}

function obtieneSaldo() {
    
    for (let i = 0; i <= datosUsuarios.length; i++) {
        if (usuarioSeleccionado === datosUsuarios[i].nombre) {
            return saldo = datosUsuarios[i].balance;
        }
    }
}

function actualizaSaldo() {
    for (let i = 0; i <= datosUsuarios.length; i++) {
        if (usuarioSeleccionado === datosUsuarios[i].nombre) {
         return datosUsuarios[i].balance = saldo;
        }
    }
}

function ingresaPassword() {
    while (contador <= 3) {
        if (pantallaEntrada.value === password) {
            pantallaEntrada.value = "";
            pantallaEntrada.placeholder = "";
            pantallaSalida.value = "Seleccione una Opción";
            recuadroOpciones.style.display = "";
            estatus = "opciones";
            return;
        } else {
            console.log(contador);
            pantallaEntrada.value = "";
            pantallaSalida.value = "NIP Incorrecto. Intente de Nuevo. Intento " + contador + " de 3.";
            contador++;
            return;
        }
    }
    contador = 1;
    reinicia();
}

function hazUnDeposito() {
    pantallaEntrada.value = "";
    pantallaEntrada.placeholder = "Ingresa Monto a Depositar";
    pantallaSalida.value = "Depósito a su cuenta en Moneda Nacional.";
    estatus ="deposito";
}

function operacionDeposito() {
    if (pantallaEntrada.value === "") {
        pantallaSalida.value = "No Ingresaste ninguna cantidad. Su saldo no cambió.";
        pantallaEntrada.value = "";
        pantallaEntrada.placeholder = "Ingresa Monto a Depositar";
    } else {
        saldo = saldo + Number(pantallaEntrada.value);
        actualizaSaldo();
        pantallaSalida.value = "Su saldo actualizado es de $" + saldo.toFixed(2);
        pantallaEntrada.value = "";
        pantallaEntrada.placeholder = "";
        estatus = "opciones";
    }
}

function hazUnRetiro() {
    pantallaEntrada.value = "";
    pantallaEntrada.placeholder = "Ingresa Monto a Retirar";
    pantallaSalida.value = "Retiro de su cuenta en Moneda Nacional.";
    estatus ="retiro";
}

function operacionRetiro() {
    if (pantallaEntrada.value === "") {
        pantallaSalida.value = "No Ingresaste ninguna cantidad. Su saldo no cambió.";
        pantallaEntrada.value = "";
        pantallaEntrada.placeholder = "Ingresa Monto a Retirar";
    } else {
        if (Number(pantallaEntrada.value) > saldo) {
            pantallaEntrada.value = "";
            pantallaEntrada.placeholder = "Ingresa Monto a Retirar";
            pantallaSalida.value = "No tiene saldo suficiente, intente de nuevo.";
        } else {
            saldo = saldo - Number(pantallaEntrada.value);
            actualizaSaldo();
            pantallaSalida.value = "Su saldo actualizado es de $" + saldo.toFixed(2);
            pantallaEntrada.value = "";
            pantallaEntrada.placeholder = "";
            estatus = "opciones";
        }
    }
}

// Listeners

reinicia();

usuarioAna.addEventListener("click", () => {
    usuarioSeleccionado = "ana";
    usuarioAna.style.display = "none";
    usuarioPedro.style.display = "none";
    usuarioVeronica.style.display = "none";
    esteEsElBueno.style.display = "";
    imgSeleccionada.src = "./images/ana.jpg";
    pSeleccionado.innerHTML = "Ana Rodríguez";
    textoSeleccione.innerHTML = "Bienvenida Ana!";
    recuadroTeclado.style.display = "";
    identificaPassword();
    obtieneSaldo();
})

usuarioPedro.addEventListener("click", () => {
    usuarioSeleccionado = "pedro";
    usuarioAna.style.display = "none";
    usuarioPedro.style.display = "none";
    usuarioVeronica.style.display = "none";
    esteEsElBueno.style.display = "";
    imgSeleccionada.src = "./images/pedro.jpg";
    pSeleccionado.innerHTML = "Pedro Vela";
    textoSeleccione.innerHTML = "Bienvenido Pedro!";
    recuadroTeclado.style.display = "";
    identificaPassword();
    obtieneSaldo();
})

usuarioVeronica.addEventListener("click", () => {
    usuarioSeleccionado = "veronica";
    usuarioAna.style.display = "none";
    usuarioPedro.style.display = "none";
    usuarioVeronica.style.display = "none";
    esteEsElBueno.style.display = "";
    imgSeleccionada.src = "./images/veronica.png";
    pSeleccionado.innerHTML = "Verónica Jiménez";
    textoSeleccione.innerHTML = "Bienvenida Verónica!";
    recuadroTeclado.style.display = "";
    identificaPassword();
    obtieneSaldo();
})

btnCorregir.addEventListener("click", () => {
    let texto = pantallaEntrada.value;
    pantallaEntrada.value = texto.slice(0, -1);
})

btnCancelar.addEventListener("click", reinicia);

btnAceptar.addEventListener("click", () => {
    
    if (estatus === "inicio") {
        ingresaPassword();
    } else if (estatus === "opciones") {
        pantallaSalida.value = "Selecciona una Opción.";
        pantallaEntrada.value = "";
    } else if (estatus === "deposito") {
        operacionDeposito();
    } else if (estatus === "retiro") {
        operacionRetiro();
    }
})

btnSaldo.addEventListener("click", () => {

    obtieneSaldo();
    pantallaSalida.value = "Su saldo es de: $" + saldo.toFixed(2);
})

btnDeposito.addEventListener("click", hazUnDeposito);

btnRetiro.addEventListener("click", hazUnRetiro);