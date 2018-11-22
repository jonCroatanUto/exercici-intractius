var enchufada = false;
var quemada = false;

var b1;

function setup() {

  frameRate(10);
  b1 = createButton('enchufala');
  b1.mousePressed(function(){enchufada=true;});
  t = createDiv('mm')
}

function draw() {

    // esta enchufada¿
    if ( enchufada == true ){

      ///bombilla quemada?
      if ( quemada == true ){
        t.html("cambiame la bombilla nen!");
      }
      else {
        t.html("wallapopme!");
      }
    }
    else{
      t.html("enchufame nen!");

}
    }
