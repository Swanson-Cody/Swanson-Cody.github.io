///Demonstrates variables, function, and a conditional statement.///
function Compute()
{
    var first = parseInt(document.getElementById("input1").value);
    var second = parseInt(document.getElementById("input2").value);
    var answer ="";
		
    if (first > second)
    {
        answer = "The first number is biggest";
    }
    else if (second > first)
    {
        answer = "The second number is biggest";
    }
    else
    {
        answer = "They are equal";
    }
		
    document.getElementById("outputDiv1").innerHTML = answer;
}


///Demonstrates parameters, functions, and variables.///
function doInputOutput()
{	
    var tempF = parseFloat(document.getElementById("temp").value);
    var windSpeed = parseFloat(document.getElementById("speedy").value);
		
    var chill = windChill(tempF, windSpeed);
		
    document.getElementById("outputDiv2").innerHTML = chill + "° F";
}
	
function windChill(tempF, speed) 
{
    var needRound = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF) * (Math.pow(speed, .16));
    var stepOne = needRound * 100;
    var stepTwo = Math.round(stepOne);
    var stepThree = stepTwo/100;
    var result = stepThree;
    return result;
}


///Demonstrates loops, function, and variables///
function results ()
{
    var n = parseInt(document.getElementById("inputInteger").value);
    var answer = 0;
			
    for (var i = 1; i <= n; i++) {
        var result = i%2;
				
        if (result == 1) {
            answer += i;
        }
    }
    
    document.getElementById("outputDiv3").innerHTML = answer;
}


///Demonstrates arrays, functions, variables, and loops.
function doCalcs()
{
    var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var results = countEvens(arrayList); //This should find: 2, 4, 6, 8, 10 and output the result as 5.
		
    document.getElementById("outputDiv4").innerHTML = results;
}
    function countEvens(list)
    {
        var count = 0;
			
        for (var i = 0; i < list.length; i++) 
        {
            if (list[i] % 2 == 0) {
                count++;
            }
        }
			
    return count;
}