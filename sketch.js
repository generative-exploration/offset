let img;
var distance = 30;
var lengthX = 100;
var lengthY = 100;
let c;
let myFont;

function preload(){ 
  img = loadImage("0010.jpg");
  myFont = loadFont('FiraCode-Regular.ttf');
}

function setup() {
  let c =  createCanvas(960, 1200);
  image(img, 0, 0);
  textFont(myFont);
  textSize(14);
}

function draw() {
  copy(img, 0, height-20, width, height, 0, height-20, width, height);  
   
  if (mouseIsPressed) {
    //copy und .get haben leicht andere funktionen als in processing
   // let d = get(mouseX+distance, mouseY+distance, lengthX, lengthY);
   // image(d, mouseX, mouseY);
    copy(img, mouseX+distance, mouseY+distance, lengthX, lengthY , mouseX, mouseY, lengthX, lengthY);
  }
  
  fill(255);
  textAlign(CENTER);
  text("size x: "+ lengthX +"  size y: "+ lengthY +"  spacing: "+distance, width/2, height-5);
}

function keyPressed() { 
   if (key === 's') {
      saveCanvas(c, 'gen_exploration', 'jpg');
  }
  
  if (key == 'r') {
    image (img, 0, 0);
  }
  
    if (key == 'n') {
    distance = distance-5;
  }
  if (key == 'm') {
    distance = distance+5;
  }

    if (keyCode == UP_ARROW) {
      size = size+20;
    }
    if (keyCode == DOWN_ARROW) {
      size = size-20;
      if ( size == 40) {
        size = size+20;
      }
    }
    if (keyCode == RIGHT_ARROW) {
      distance = distance+10;
    }
    if (keyCode == LEFT_ARROW){
      distance = distance-10;
     //if ( distance == -10) {
     // distance = distance+10;
     // }
    }
}

