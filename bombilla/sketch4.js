ar width = null;
var enchufada = null;
var bombilla = null;


function setup() {
  createCanvas(2100, 1100);
  
 title = createDiv('Solucionador de lamparas');
  title.style('font-size', '18px');
  title.style('color', '#ff0000');

  t = createDiv('está enchufada?');
  b1 = createButton('no');
  b1.mousePressed(
    function(){
     
      enchufada = false;
    

    }
  );


  b2 = createButton('si');
  b2.mousePressed(
    function(){
   
      enchufada = true;
     
    }
  );

 r = createDiv(''); 
  s = createDiv('...');

  b3 = createButton('enchufame');
  b3.mousePressed(
    function(){
      width = true;
      
    

    }
  );


  b4 = createButton('cambiame la bombilla');
  b4.mousePressed(
    function(){
      width = false;
    
     
    }
  );

    t1 = createDiv('tiene bombilla?');
  b5 = createButton('no');
  b5.mousePressed(
    function(){
      bombilla = false;
    }
  );
  b6 = createButton('si');
  b6.mousePressed(
    function(){
      bombilla = true;
     
    }
  );
  

  

  r1 = createDiv(''); 
  s1 = createDiv('...');


  b7 = createButton('poner bombilla');
  b7.mousePressed(
    function(){
      width = true;
    }
  );
 
  b8 = createButton('buscatela, Wallaponme');
  b8.mousePressed(
    function(){
      width = true;
    }
  );

 
}
  createCanvas(2100, 1100);




function draw() {
  background(0);

   width = width * 2
  if (width > 2100) {
   width = 0; 
 }
  if (width == true){
     width = 1;
  }
if (width == false){
     width = 0;
  }else {
  null;
}
 if (enchufada == false) {
    s.html('enchufame');
  } else {
  null;
  }


   if (enchufada == true) {
    s.html('mira la bombilla');
  } else {
  null;
    
  }

    if (bombilla == false) {
    s1.html('pomela inutil');
  } else {
  null;
  }


  
   if (bombilla == true) {
    s1.html('buscate la vida');
  } else {
  null;
    
  }
  // afegir lógica
  // if ...
  
  r.html("que hay que hacer?");
  r1.html("i ahora que?");

  




 
  push();
  translate(width*0, height*0.5);
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
