![css](https://raw.githubusercontent.com/David-Albarracin/README_MATERIALS/main/css-html-js.png)

# FILTRO JS

**Edgar Benjamin David Albarracin Sanabria** 

## Descripción:

​	Se Realiza una solucion para la Empresa GBP que desea construir una aplicacion que le permita cotizar el desarrollo de las diferentes aplicaciones móviles que se desarrollan en la empresa, en base a el maquetado enviado se desarrolla la solucion propuesta para ello usamos clases css que son las siguientes. 

## Clases Css:

Para esta solucion tenemos un solo archivo con las clases css llamado style.css en la primera seccion encontramos  la importacion de la funte madimi de google luego encontramos la implementacion de algunas variables que nos ayudan con el desarrollo y seguido encontramos el reinicio de los estilos por defecto de algunas etiquetas de css

`````css
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

:root{
    --first-color: #14E2CD;
    --second-color: #6F66F0;
    --text-color: #FFFFFF;
    --body-color: #3D3935;
    --container-color: #615b54;
}


*{
    margin: 0;
}

body{
    font-family: "Madimi One", sans-serif;
    background: var(--body-color);
    color: var(--text-color);
    padding: 2rem 1rem;
}


img{
    width: 100%;
    max-width: 160px;
    height: auto;
}

ul{
    list-style: none;
}
`````

En las siguientes clases encontramos algunas clases css reusables que nos ayudan a llevar un desarrollo mas organizado 

```css
/**/

.first-img{
    max-width: 300px; /*Limita el Ancho de la imagen a 300px*/
}

.mb-2{
    margin-bottom: 2rem; /*Margenes en la parte de abajo de 2rem*/
}

.container{
    display: flex; /*Vuelve el contenedor flexible*/
    justify-content: center; /*Centra su contenido*/
    align-items: center;/*Alinea los elementos al centro*/
    width: 100%;
    height: 100%;
}

.d-grid{
    display: grid; /*Se vuelve un contenedor de typo grid*/
}

.d-flex{
    display: flex;/*Se vuelve un contenedor de typo flex*/
}

.text-align-center{
    text-align: center;
}

.text-color-first{
    color: var(--first-color);
}

.mb-1{
    margin-bottom: 1rem;
}

.g-2{
    gap: 2rem;
}

.center-content{
    flex-direction: column;
    align-items: center;
}

.d-none{
    display: none;
}
```

despues de estas clases encontrasmos las clases unicas de la web que nos ayudan agregar estilos personalizados para cada etiqueta con su estilo 

```css
/**/

.card{
    cursor: pointer;
    padding: 1rem 0.5rem;
}

.card:hover{
    background-color: var(--container-color);
    transform: scale(1.1);
    transition: all 2ms ease;
    border-radius: 5px;
}

.button{
    max-width: 200px;
    border: none;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 5px;
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 800;
    background: var(--first-color);
    background: linear-gradient(90deg, var(--first-color) 20%, var(--second-color) 89%);
} 
.................
```

por ultimo encontramos los breackpoins que este cosa solo contamos con uno que nos ayuda a distribuir el contenido para que se adapte a la pantalla del dispositivo

```css
@media (min-width: 992px) {
    .col-md-4{
        grid-template-columns: repeat(3, 1fr);/*divide el contenido de tipo grid en 3 columnas*/
    }
    
    .col-md-3{
        grid-template-columns: repeat(4, 1fr);
    }

    img{
        max-width: 200px;
    }

    .biggest-font-size{
        font-size: 3rem;
    }
}
```



## APP.JS:

En este componente encontramos toda la funcionalidad del aplicativo desde la forma dinamica de cambiar de secciones hasta el envio del formulario 

```js
const JSON_URL = "http://154.38.171.54:3000/priceI"; //URL DEL JSON

const HEADERS = {
    "Content-Type": "application/json",
};//Typo de Contenido que vamos a enviar

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
    customer.option.push(option);
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
```

Para Finalizar y recalcar este no es el el final del aplicativo ya que al momento de realizar esta propuesta pudimos encontrar que las opciones de las preguntas se pueden crear dinamicamente y se puede crear una estructura para cada pregunta