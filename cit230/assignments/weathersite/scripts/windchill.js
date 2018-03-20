// Using notes/pseudo code is the only way for me to figure out what to do with JS.

function getWindChill()
{
    // Retrieve needed information from franklin page.
    var input1 = parseFloat(document.getElementById("highTemp").innerHTML);
    var input2 = parseFloat(document.getElementById("lowTemp").innerHTML);
    var windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);

    // Obtain average temperature from high and low			
    var avgTempF = (input1 + input2)/2;

    //Nickname/Transform function into "chill"            
    var chill = windChill(avgTempF, windSpeed);

    //Return the results contained in "chill" back to the franklin page.
    document.getElementById("chillyWind").innerHTML = chill + "° F";
}

//Create Function to calculate Wind Chill.
    function windChill(avgTempF, windSpeed) 
    {
        var needRound = 35.74 + (0.6215 * avgTempF) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * avgTempF) * (Math.pow(windSpeed, .16));
        var stepOne = needRound * 100;
        var stepTwo = Math.round(stepOne);
        var stepThree = stepTwo/100;
        var result = stepThree;
        return result;
    }
