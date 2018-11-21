function draw() {

  background(0);

  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(39, 4, 82, 3);
  pop();

  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(70, 9, 80, 20);
  pop();

  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  polygon(15, 1, 70, 7);
  pop();
}

function setup() {
  b1 = createButton('enchufala');
  b1.mousePressed(function(){enchufada=true;});
  createCanvas(2000, 1000);
  frameRate(1900);

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
