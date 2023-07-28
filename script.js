const key = "89cbcb96c0021b8c090031bd7f07b2a6"

function writeScreen(dados){
    document.querySelector(".city").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp)+"°C"
    document.querySelector(".predictive").innerHTML = dados.weather[0].description
    document.querySelector(".img-predictive").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".moisture").innerHTML = `Umidade: ${dados.main.humidity}%`
}

async function citySearch(nameCity){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    writeScreen(dados)
}

function city(){
   const nameCity = document.querySelector(".input-city").value
   citySearch(nameCity) 
}