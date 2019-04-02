let l = console.log;
let mySound;
let fft;
let shapes;

function preload() {
  mySound = loadSound(
    "./ab.mp3"
  );
}

function setup() {
  createCanvas(1400, 800);
  noFill();
  fft = new p5.FFT();
  fft.setInput(mySound);

  shapes = Array(500).fill().map(() => [random(), random()])
  mySound.play();
}

function draw() {
  background(200);

  let spectrum = fft.analyze();

  // beginShape();
  // for (i = 0; i < spectrum.length; i++) {
  //   vertex(i, map(spectrum[i], 0, 255, height, 0));
  // }
  // endShape();

  shapes.map((shape) => {
    push();
    translate(width * shape[0], height * shape[1]);
    //rotate(frameCount / -100.0);
    ellipse(0, 0, 30 * shape[0]);
    pop();
  })
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}