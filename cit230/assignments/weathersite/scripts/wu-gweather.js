var weatherObjectG = new XMLHttpRequest();

weatherObjectG.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/TX/Greenville.json', true );

weatherObjectG.send();

weatherObjectG.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObjectG.responseText);
    console.log(weatherInfo);
    
    document.getElementById('placeG').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTempG').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_iconG').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_stringG').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speedG').innerHTML = weatherInfo.current_observation.wind_string;


} //end of Onload



var weatherForecastG = new XMLHttpRequest();

weatherForecastG.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/TX/Greenville.json', true );

weatherForecastG.send();

weatherForecastG.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecastG.responseText);
    console.log(neededInfo);
    
    document.getElementById('text_w_forecastG').innerHTML = neededInfo.forecast.txt_forecast.forecastday[0].fcttext;
}