const API_KEY = `39d090e76750989bec3f81c36c031ca4`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const getWeather=async (city)=>{
        weather.innerHTML= `<h2>Loading...</h2>`
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        
        const response=await fetch(url);
        const data= await response.json();
        return showWeather(data);
    }
    const showWeather=(data)=>{
        if(data.cod=="404"){
            weather.innerHTML= `<h2>City Not Found</h2>`
        }
     weather.innerHTML=     
      `     <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" height="100px"/>
            </div>
            <div>
                <h2>${data.main.temp} °C </h2>
                <h4>${data.weather[0].main}</h4>
            </div>
            `
    }


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)