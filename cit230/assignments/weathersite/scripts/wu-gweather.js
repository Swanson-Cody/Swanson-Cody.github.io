var weatherObjectfoo = new XMLHttpRequest();

weatherObjectfoo.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/TX/Greenville.json', true );

weatherObjectfoo.send();

weatherObjectfoo.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObjectfoo.responseText);
    console.log(weatherInfo);
    
    document.getElementById('placeG').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTempG').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_iconG').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_stringG').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speedG').innerHTML = weatherInfo.current_observation.wind_string;


} //end of Onload



var weatherForecastfoo = new XMLHttpRequest();

weatherForecastfoo.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/TX/Greenville.json', true );

weatherForecastfoo.send();

weatherForecastfoo.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecastfoo.responseText);
    console.log(neededInfo);
    
    document.getElementById('text_w_forecastG').innerHTML = neededInfo.forecast.txt_forecast.forecastday[0].fcttext;
}