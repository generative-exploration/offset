let img;
var distance = 30;
var lengthX = 100;
var lengthY = 100;
let c;
let myFont;

function preload() {
  img = loadImage("0010.jpg");
  myFont = loadFont('FiraCode-Regular.ttf');
}

function setup() {
  let c = createCanvas(960, 1200);
  image(img, 0, 0);
  textFont(myFont);
  textSize(14);
}

function draw() {
  copy(img, 0, height - 20, width, height, 0, height - 20, width, height);

  if (mouseIsPressed) {
    copy(img, mouseX + distance, mouseY + distance, lengthX, lengthY, mouseX, mouseY, lengthX, lengthY);
  }

  fill(255);
  textAlign(CENTER);
  text("size x: " + lengthX + "  size y: " + lengthY + "  distance: " + distance, width / 2, height - 5);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(c, 'gen_exploration', 'jpg');
  }

  if (key == 'r') {
    image(img, 0, 0);
  }

  if (key == 'n') {
    distance = distance - 5;
  }
  if (key == 'm') {
    distance = distance + 5;
  }

  if (keyCode == UP_ARROW) {
    lengthY = lengthY + 20;
  }
  if (keyCode == DOWN_ARROW) {
    lengthY = lengthY - 20;
    if (lengthY == 40) {
      lengthY = lengthY + 20;
    }
  }
  if (keyCode == RIGHT_ARROW) {
    lengthX = lengthX + 20;
  }
  if (keyCode == LEFT_ARROW) {
    lengthX = lengthX - 20;
    if (lengthX == 400) {
      lengthX = lengthX + 20;
    }
  }
}
