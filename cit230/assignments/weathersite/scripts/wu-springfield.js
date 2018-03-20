var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/OR/Springfield.json', true );

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_string').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speed').innerHTML = weatherInfo.current_observation.wind_string;
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    getWindChill();
} //end of Onload

var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/OR/Springfield.json', true );

weatherForecast.send();

weatherForecast.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecast.responseText);
    console.log(neededInfo);
    
    document.getElementById('highTemp').innerHTML = neededInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    
    document.getElementById('lowTemp').innerHTML = neededInfo.forecast.simpleforecast.forecastday[0].low.fahrenheit;
}