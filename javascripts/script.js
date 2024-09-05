//Icon codes: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

/*
    Este objeto contendrá la información del clima, incluyendo el nombre 
    de la ciudad, la fecha, la temperatura, la velocidad del viento, la humedad, 
    el ícono del clima y la descripción del clima (name, date, temperature, wind, humidity, icon y description).
*/

let weatherData = {
    name: 'London',
    date: '2023-06-19',
    temperature: "18.71°C",
    wind: "4.31 M/S",
    humidity: "76%",
    icon: "https://openweathermap.org/img/wn/10d@4x.png",
    description: "Moderate rain"
}

/*
    Este arreglo contendrá varios objetos, cada uno representando un día 
    de pronóstico del clima con información detallada como fecha, temperatura, 
    viento, humedad, ícono y descripción (date, temperature, wind, humidity, icon y description).
*/
let daysForecast = [
    {
        date: '2023-06-20',
        temperature: '17.64 °C',
        wind: "0.73 M/S",
        humidity: "70%",
        icon: "https://openweathermap.org/img/wn/02d@4x.png",
        description: 'few clouds'
    },
    {
        date: '2023-06-21',
        temperature: '18.78 °C',
        wind: "2.72 M/S",
        humidity: "83%",
        icon: "https://openweathermap.org/img/wn/01d@4x.png",
        description: 'clear sky'
    },
    {
        date: '2023-06-22',
        temperature: '18.20 °C',
        wind: "1.49 M/S",
        humidity: "72%",
        icon: "https://openweathermap.org/img/wn/11d@4x.png",
        description: 'thunderstorm'
    },
    {
        date: '2023-06-23',
        temperature: '17.08 °C',
        wind: "0.9 M/S",
        humidity: "89%",
        icon: "https://openweathermap.org/img/wn/10d@4x.png",
        description: 'rain'
    },
    {
        date: '2023-06-24',
        temperature: '15.08 °C',
        wind: "1.2 M/S",
        humidity: "95%",
        icon: "https://openweathermap.org/img/wn/13d@4x.png",
        description: 'snow'
    }
]

// Llame a la función weatherToday al final de este archivo 
let weatherToday = () => {

    // Complete la variable title con el nombre de la ciudad y la fecha del objeto weatherData.
    // let title = <name> + " (" + weatherData.date + ")"
    let title = weatherData['name'] + " (" + weatherData.date + ")";

    // Utilice el método getElementsByTagName para obtener todos los elementos <h2> del documento
    // let h2s = 
    let h2s = document.getElementsByTagName("h2");

    // Acceda al primer elemento de h2s 
    // let h2sFirst = h2s[ ]
    let h2sFirst = h2s[0];

    // Utilice la propiedad innerText para asignar el titulo 
    // h2sFirst.    = title
    h2sFirst.innerText = title;

    // Obtenga todos los elementos <h6> del documento 
    // let h6s = 
    let h6s = document.getElementsByTagName("h6");

    // Actualice el texto de los primeros tres elementos de la colección con el valor de la temperatura, 
    // el viento y la humedad del objeto weatherData.
    // h6s[ ].innerText = "Temperature: " + 
    // h6s[ ].innerText = "Wind: " + weatherData.wind
    // h6s[2].innerText = "Humidity: " + 
    h6s[0].innerText = "Temperature: " + weatherData.temperature
    h6s[1].innerText = "Wind: " + weatherData.wind
    h6s[2].innerText = "Humidity: " + weatherData.humidity

    // Actualice el texto del cuarto elemento <h6> con el valor de la descripción del objeto weatherData.
    // h6s[ ].innerText = 
    h6s[3].innerText = weatherData.description

    // Utilice el método getElementById para obtener el elemento de imagen con el id "icon-description"
    // let img = 
    let img = document.getElementById("icon-description")

    // Utilice el método setAttribute para establecer el atributo "src" con el valor de ícono del objeto weatherData.
    // img. 
    img.setAttribute("src", weatherData.icon)

    
}

// Cree la función weatherForecast, sin parámetros
// Llame a la función weatherToday al final de este archivo 
let weatherForecast = () => {
// {

    // Utilice document.getElementsByClassName para obtener una colección de elementos con la clase "weather-cards". 
    // let uls = 
    let uls = document.getElementsByClassName("weather-cards")

    // Seleccione el primer elemento de la colección uls.
    // let ulsFirst = uls[ ]
    let ulsFirst = uls[0]

    // Asigne una cadena vacía al contenido HTML (usa la propiedad innerHTML) del primer elemento  
    // ulsFirst.   = 
    ulsFirst.innerHTML = ""

    // Utilice un bucle for...of para recorrer cada elemento del arreglo daysForecast.
    //   {
      
        // Desestructure las propiedades date, temperature, wind, humidity, icon y description del elemento actual en el recorrido
        // let { } = 

        // Complete la cadena de texto plantilla (estructura HTML) 
        // con las propiedades desestructuradas en el siguiente orden: date, icon, description, temperature, wind y humidity.
        
        /*
        let template = `
        <li class="card">
            <h3>${ }</h3>
            <img src="${ }" alt="${ }">
            <h6>Temp: ${ }</h6>
            <h6>Wind: ${wind}</h6>
            <h6>Humidity: ${ }</h6>
        </li>`
        */

        // Use innerHTML del primer elemento y asigne la cadena de texto plantilla  
        // ulsFirst.     += 
    //}
    for (const iterator of daysForecast) {
        let {date, temperature, wind, humidity, icon, description} = iterator;
        let template = `
        <li class="card">
            <h3>${date}</h3>
            <img src="${icon}" alt="${description}">
            <h6>Temp: ${temperature}</h6>
            <h6>Wind: ${wind}</h6>
            <h6>Humidity: ${humidity}</h6>
        </li>`
        ulsFirst.innerHTML += template;
    }

    
}

// Ejecute las funciones flecha weatherToday y weatherForecast
weatherToday();
weatherForecast();

