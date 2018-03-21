var weatherObjectF = new XMLHttpRequest();

weatherObjectF.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/conditions/q/MN/Franklin.json', true );

weatherObjectF.send();

weatherObjectF.onload = function() {
    
    var weatherInfo = JSON.parse(weatherObjectF.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('wc_string').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('w_speed').innerHTML = weatherInfo.current_observation.wind_string;


} //end of Onload



var weatherForecastF = new XMLHttpRequest();

weatherForecastF.open('GET','https://api.wunderground.com/api/1adfc4042a009ff6/forecast/q/MN/Franklin.json', true );

weatherForecastF.send();

weatherForecastF.onload = function() {
    
    var neededInfo = JSON.parse(weatherForecastF.responseText);
    console.log(neededInfo);
    
    document.getElementById('text_w_forecast').innerHTML = neededInfo.forecast.txt_forecast.forecastday[0].fcttext;
}