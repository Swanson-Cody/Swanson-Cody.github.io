var weatherObjectS = new XMLHttpRequest();

weatherObjectS.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/OR/Springfield.json', true );

weatherObjectS.send();

weatherObjectS.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObjectS.responseText);
    console.log(weatherInfo);
    
    document.getElementById('placeS').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTempS').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_iconS').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_stringS').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speedS').innerHTML = weatherInfo.current_observation.wind_string;


} //end of Onload



var weatherForecastS = new XMLHttpRequest();

weatherForecastS.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/OR/Springfield.json', true );

weatherForecastS.send();

weatherForecastS.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecastS.responseText);
    console.log(neededInfo);
    
    document.getElementById('text_w_forecastS').innerHTML = neededInfo.forecast.txt_forecast.forecastday[0].fcttext;
}