function setup() {
  // put setup code here
  createCanvas(500,500);
  background('#0A47A1');
  

}

function draw() {

   // Draw the sun, a circle at location (250, 250) with a diameter of 380. 
  stroke('#FFA300');
  strokeWeight(10);
  fill('#FFCD01');
  circle(250, 250, 380);


  // Draw the top, left cloud
  stroke('#FFFFFF');
  fill('#FFFFFF');
  ellipse(120, 115, 100,50);
  ellipse(150, 135, 100,50);  
  ellipse(100, 125, 100,50);
  ellipse(125, 100, 100,50);

   // Draw the bottom, right cloud
  stroke('#FFFFFF');
  fill('#FFFFFF');
  ellipse(440, 390, 100,50);
  ellipse(420, 420, 100,50);
  ellipse(360, 420, 100,50);
  ellipse(380, 390, 100,50);


   // Mouse the day night into day
  stroke('#5F95FE');
  fill('#5F95FE');
  circle(mouseX, mouseY, 75);

    //text quote at bottom
  textSize(18)
  fill('#FFFFFF');
  stroke('black');
  strokeWeight(4);
  text("Through every dark night, there's a bright day after that.", 30, 480)

 
 
 

  


}