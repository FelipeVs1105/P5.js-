function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255);
      strokeWeight(5);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }