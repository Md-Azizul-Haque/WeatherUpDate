
    const apiKey = '24cb398b69df2ddcb9b03a9d595adb7d';
    const apiBody = 'http://api.openweathermap.org/data/2.5/weather';

    const getWeather = city =>{
        const url = `${apiBody}?q=${city}&units=metric&appid=${apiKey}`;
        fetch (url)
        .then(receive => receive.json())
        .then(data => showData(data))
    }

    
    const searchBtn = document.getElementById("searchBtn").addEventListener("click", function(){
        const cityName = document.getElementById("searchCity").value;
        getWeather(cityName)
    })

    const showData = data => {
        document.getElementById("showCity").innerText = data.name;
        document.getElementById("temper").innerText = data.main.temp;
        document.getElementById('weather_status').innerText = data.weather[0].main;
        document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
       document.getElementById('searchCity').value = ""; 
       }
       getWeather("Dhaka");