const JSON_URL = "http://154.38.171.54:3000/priceI"

const HEADERS = {
        
}

const customer = {
    name: "",
    phoneNumber: "",
    email: "",
    total: 0
}


function nextComponent(price, position){
    const afterSection = document.getElementById('answer_'+(position - 1))
    afterSection.classList.add('d-none')
    const section = document.getElementById('answer_'+position)
    section.classList.remove('d-none')
    customer.total += price
    document.getElementById('total').textContent = customer.total + ' COP'
}

function sendInfo(){
    console.log(customer.total);
}