var canvasShapes = document.getElementById("canvasShape");
var context = canvasShapes.getContext("2d");


//This creates the H
context.moveTo(50,75);
context.lineTo(50,125);

context.moveTo(50,100);
context.lineTo(75,100);

context.moveTo(75,75);
context.lineTo(75,125);


//This creates the E
context.moveTo(85,75);
context.lineTo(85,125);

context.moveTo(85,75);
context.lineTo(105,75);

context.moveTo(85, 100);
context.lineTo(105, 100);

context.moveTo(85,125);
context.lineTo(105,125);


//This creates the L
context.moveTo(115,75);
context.lineTo(115,125);

context.moveTo(115,125);
context.lineTo(135,125);


//This creates the L
context.moveTo(145,75);
context.lineTo(145,125);

context.moveTo(145,125);
context.lineTo(165,125);

context.stroke();


//This creates the O
context.beginPath();
context.arc(195,100,25,0,2*Math.PI);

context.stroke();


//Makes smiley
context.beginPath();
context.arc(185,95,3,0,7);

context.stroke();


context.beginPath();
context.arc(205,95,3,0,7);

context.stroke();

context.beginPath();
context.arc(195,105,10,0,3);

context.stroke();



//Exclamation Point
context.moveTo(235,75);
context.lineTo(235,110);

context.stroke();


context.beginPath();
context.arc(235,120,3,0,7);

context.stroke();


//This creates actual text
context.font = "25px cursive";
context.fillText("Hello!",5,25);