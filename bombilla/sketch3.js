var width = 0;
var height = 0;


function setup() {
  createCanvas(2000, 1100);

}


function draw() {
  background(0);
if (mouseIsPressed){
    width = width - 40;
}


  width = width + 40;
  if (width > 2000) {
   width = 0;
 }




  push();
  translate(width*1, height*0.5);
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

