var width = 0;
var height = 0;

function setup() {
  createCanvas(2100, 1100);
 
}


function draw() {
  background(0);
  width = width + 50;
  if (width > 2100) {
   width = 0;
  

}
height = height + 10;
  if (height > 1100) {
   height = 0;
  

}


 
  push();
  translate(width*1, height*1);
  rotate(frameCount / 2.0);
  translate(p5.Vector.fromAngle(millis() / 100, 50));
  polygon(0, 0, 100, 3);
  pop();

  
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  
  endShape(CLOSE);
  
}
