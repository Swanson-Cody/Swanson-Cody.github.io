var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_string').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speed').innerHTML = weatherInfo.current_observation.wind_string;


} //end of Onload




var weatherForecast = new XMLHttpRequest();

weatherForecast.open('GET','http://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/MN/Franklin.json', true );

weatherForecast.send();

weatherForecast.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecast.responseText);
    console.log(neededInfo);
    
    document.getElementById('text_w_forecast').innerHTML = neededInfo.forecast.txt_forecast.forecastday[0].fcttext;
    
    
}