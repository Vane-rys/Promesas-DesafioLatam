// Definición de la función asincrónica para obtener datos
const obtenerDatos = async () => {
    // URL de la cual se obtendrán los datos
    const url = "https://jsonplaceholder.typicode.com/photos";

    try {
        // Realiza una solicitud HTTP para obtener los datos
        const respuesta = await fetch(url);
        
        // Convierte la respuesta a formato JSON
        const datos = await respuesta.json();
        
        // Itera sobre los datos y muestra los títulos de las fotos con ID menor a 21
        datos.forEach(element => {
            if (element.id < 21) {
                console.log(element.title);
            }
        });
    } catch (error) {
        // Manejo de errores, en caso de que la solicitud falle
        console.log(error);
    }
}

// Llamada a la función para obtener y mostrar datos
obtenerDatos();

// Función que devuelve una promesa con un mensaje después de un retraso de 3 segundos
const mensajeInterno = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada.");
        }, 3000);
    });
};

// Función asincrónica que espera la resolución de la promesa y muestra el mensaje
const mostrarMensaje = async () => {
    const respuesta = await mensajeInterno();
    console.log(respuesta);
}

// Llamada a la función para mostrar el mensaje después de 3 segundos
mostrarMensaje();
