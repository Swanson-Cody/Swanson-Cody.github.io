<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <title>JavaScript Basics</title>
        <meta name="author" content="Cody Swanson">
        <meta name="description" content="How to use JavaScript for Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays">
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>
            JavaScript Basics: <span>Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays</span>
        </h1>
        <main>
            
            <section>
                <h2>
                    Example of a function, variables and a conditional statement:
                </h2>
                <p>
                    Please input a number within &quot;Input 1&quot; and &quot;Input 2&quot; to determine which one is greater.
                </p>
                <p>
                    Input 1: <input type="text" id="input1"><br>
                    
                    Input 2: <input type="text" id="input2"><br>
                    
                    <button type="button" onclick="Compute()">Compute</button>
                </p>
                <div id="outputDiv1"></div>
            </section>
            
            <section>
                <h2>
                    Example of parameters
                </h2>
            	<h3>
                    Please enter the &quot;Temperature&quot; and &quot;Wind Speed&quot; to find out how cold the wind is: 
                </h3>
                <p>
                    Temperature <em>(Fahrenheit)</em> <input type="text" id="temp" size="3">
                    
                    Wind Speed <em>(Miles Per Hour)</em><input type="text" id="speedy" size="3">
                    
                    <br>
                    
                    <button type="button" onclick="doInputOutput()">Wind Chill</button>
                </p>
                <div id="outputDiv2"></div>
            </section>
            
            <section>
                <h2>
                    Example of loops
                </h2>
                <h3>
                    Find out the sum of all odd integers between &quot;1&quot; and your &quot;inputed number.&quot;
                </h3>
                <p>
                    Input integer: <input type="text" id="inputInteger">
                    
                    <br>
                    
                    <button type="button" onclick="results()">Odd Integers Sum</button>
                </p>
                <div id="outputDiv3"></div>
            </section>
            
            <section>
                <h2>
                    Example of an array
                </h2>
                <h3>
                    Click the button below to see how many times an even number is found between the numbers 1&#45;10.
                </h3>
                <p>
                    <button type="button" onclick="doCalcs()">Count</button>
                </p>
                <div id="outputDiv4"></div>
            </section>
            <section>
                <h2>
                    Example of an associative array
                </h2>
                <h3>
                    Some bad guys in the scriptures:
                </h3>
                <?php 
                    $baddies = array(
                    "Book of Mormon"=>" Korihor, Nehor, Laman and Lemuel, Laban, Sherem, Amulon, King Noah, Amalickiah, Zerahemnah, Kishkumen, Gadianton, Pachus and the King-men", 
                                     
                    "Bible"=>" Pharoah, Philistines, Cain, Goliath, Rabshakeh, Daughter of Herodias, Herod, Caiaphas, Judas, Priests of Baal, Haman, Presidents and princes of Darius");
                
                    echo nl2br ( "Book of Mormon Bad Guys:\n" . $baddies['Book of Mormon'] . " and others.\n\n");
                    
                    echo nl2br ("Bible Bad Guys:\n" . $baddies['Bible'] . " and others.\n\n");
                ?>
            </section>
            
        </main>
        
        <script src="javascript.js"></script>
    </body>
</html>