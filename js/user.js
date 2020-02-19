function init() {
    console.log('initializing document..');
    getContacts(); //get contacts || Invocando los contactos al cargar la pagina
}

function getContacts() {
    console.log('Gettint user...');
    //create request || Creando la peticion
    var x = new XMLHttpRequest();
    //prepare request || Preparar la peticion
    x.open('GET', 'http://jsonplaceholder.typicode.com/users/'); // Nos pide tipo de peticion y la URL
    //send request || eviar la peticion 
    x.send();
    //readystatechange event handler (Manejador de ventos) || Ver el cambio de estado
    x.onreadystatechange = function () { // Cuando se dispare el evento (cambio del status) se llamara la funcion anonima 
        if (x.readyState == 4 && x.status == 200) { //Si es igual a 4 significa que llego con los datos
            //Una cosa es el estado del mensajero y el estado de la respuesta
            var jsonData = JSON.parse(x.responseText);
            showContacts(jsonData);
        }
    }
}

function showContacts(contact) {
    
    console.log(contact);
    showContacts.forEach(g => {
        document.getElementById('name').innerHTML = showContacts.name; 
    });
}