var enchufada = false;
var quemada = false;

var b1;

function setup() {

  frameRate(10);
  b2 = createButton('cambiame');
  b2.mousePressed(
    function(){
      quemada = true; });
  b1 = createButton('enchufala');
  b1.mousePressed(function(){enchufada=true;});
  t = createDiv('mm')
}

function draw() {

    // esta enchufada¿
    if ( enchufada == true ){

      ///bombilla quemada?
      if ( quemada == true ){
        createDiv("wALLAPONME");
      }
      else {
        t.html("cambiame la bombilla nen!");
      }
    }
    else{
      t.html("enchufame nen!");

}
    }
