
var enchufada = null;
var bombilla = null;

function setup() {
  title = createDiv('solucionador de lamparas');
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

    t1 = createDiv('tiene bombilla?');
  b3 = createButton('no');
  b3.mousePressed(
    function(){
      bombilla = false;
    }
  );
  b4 = createButton('si');
  b4.mousePressed(
    function(){
      bombilla = true;
     
    }
  );

  r1 = createDiv(''); 
  s1 = createDiv('...');

 
}

function draw() {
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
  

}
