const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '973a810864msh57bebdf660532b0p19356ejsn9390e0bd8e9b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName1.innerHTML = city
    cityName2.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            // wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york' , options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct_new.innerHTML = response.cloud_pct
            feels_like_new.innerHTML = response.feels_like
            humidity_new.innerHTML = response.humidity
            max_temp_new.innerHTML = response.max_temp
            min_temp_new.innerHTML = response.min_temp
            // sunrise_new.innerHTML = response.sunrise
            // sunset_new.innerHTML = response.sunset
            temp_new.innerHTML = response.temp
            wind_degrees_new.innerHTML = response.wind_degrees
            wind_speed_new.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne' , options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct_mel.innerHTML = response.cloud_pct
            feels_like_mel.innerHTML = response.feels_like
            humidity_mel.innerHTML = response.humidity
            max_temp_mel.innerHTML = response.max_temp
            min_temp_mel.innerHTML = response.min_temp
            // sunrise_mel.innerHTML = response.sunrise
            // sunset_mel.innerHTML = response.sunset
            temp_mel.innerHTML = response.temp
            wind_degrees_mel.innerHTML = response.wind_degrees
            wind_speed_mel.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai' , options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct_dub.innerHTML = response.cloud_pct
            feels_like_dub.innerHTML = response.feels_like
            humidity_dub.innerHTML = response.humidity
            max_temp_dub.innerHTML = response.max_temp
            min_temp_dub.innerHTML = response.min_temp
            // sunrise_dub.innerHTML = response.sunrise
            // sunset_dub.innerHTML = response.sunset
            temp_dub.innerHTML = response.temp
            wind_degrees_dub.innerHTML = response.wind_degrees
            wind_speed_dub.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo' , options)
        .then(response => response.json())
        .then(response => {
            
            // console.log(response)
            cloud_pct_tok.innerHTML = response.cloud_pct
            feels_like_tok.innerHTML = response.feels_like
            humidity_tok.innerHTML = response.humidity
            max_temp_tok.innerHTML = response.max_temp
            min_temp_tok.innerHTML = response.min_temp
            // sunrise_tok.innerHTML = response.sunrise
            // sunset_tok.innerHTML = response.sunset
            temp_tok.innerHTML = response.temp
            wind_degrees_tok.innerHTML = response.wind_degrees
            wind_speed_tok.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul' , options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct_seo.innerHTML = response.cloud_pct
            feels_like_seo.innerHTML = response.feels_like
            humidity_seo.innerHTML = response.humidity
            max_temp_seo.innerHTML = response.max_temp
            min_temp_seo.innerHTML = response.min_temp
            // sunrise_seo.innerHTML = response.sunrise
            // sunset_seo.innerHTML = response.sunset
            temp_seo.innerHTML = response.temp
            wind_degrees_seo.innerHTML = response.wind_degrees
            wind_speed_seo.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris' , options)
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            cloud_pct_par.innerHTML = response.cloud_pct
            feels_like_par.innerHTML = response.feels_like
            humidity_par.innerHTML = response.humidity
            max_temp_par.innerHTML = response.max_temp
            min_temp_par.innerHTML = response.min_temp
            // sunrise_par.innerHTML = response.sunrise
            // sunset_par.innerHTML = response.sunset
            temp_par.innerHTML = response.temp
            wind_degrees_par.innerHTML = response.wind_degrees
            wind_speed_par.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));

