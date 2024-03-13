const JSON_URL = "http://154.38.171.54:3000/priceI";

const HEADERS = {
    "Content-Type": "application/json",
};

const customer = {
    name: "",
    phoneNumber: "",
    email: "",
    total: 0,
    appStructure: []
};


/**
 * Esta función es la encargada de moverse entre secciones ocultando la anterior
 * y mostrando la siguiente 
 * 
 * @param {number} price //Precio de la opción
 * @param {number} position  //Nos Ayuda a movernos entre las secciones
 * @param {string} option //Es para llevar el Registro de las Opciones del Usuario 
 */
function nextComponent(price, position, option){
    const afterSection = document.getElementById('answer_'+(position - 1));
    afterSection.classList.add('d-none'); // Clase display none
    const section = document.getElementById('answer_'+position);
    section.classList.remove('d-none');
    customer.total += price;
    option? customer.appStructure.push(option): "";
    document.getElementById('total').textContent = customer.total + ' COP';
}

/**
 * Esta función nos a obtener los datos del usuario como su nombre
 * y los envía a el servidor 
 */
function sendInfo(){
    const dialog = document.getElementById('dialog');
    customer.name = document.getElementById('name').value;
    customer.phoneNumber = document.getElementById('phoneNumber').value;
    customer.email = document.getElementById('email').value;
    fetch(JSON_URL, {
        headers: HEADERS,
        method: 'POST',
        body: JSON.stringify(customer) 
    }).then((res) => {
        res.ok? 
            dialog.innerHTML = `<h2>Gracias Por Preferirnos</h2>`:
            dialog.innerHTML = `<h2>Error en el Servidor</h2>`
    }).catch((error) => {
        dialog.innerHTML = `<h2>Error ${error.message}</h2>`
    });
}


function closeDialog(){
    setInterval()
}