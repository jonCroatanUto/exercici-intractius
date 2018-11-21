var b1, b2, b3, b4, t, t1, r;

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
  var s = createDiv('...');
  r = createDiv('');
}

function draw()

{if () {
  enchufada = true
} else {
r = createDiv('wallaponme');
}
  // afegir lógica
  // if ...

  r.html("que hay que hacer?");

}
