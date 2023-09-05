let walkers = [];
let c;
let colors = [[], [], [], [], []];

// Definitions for circle containment
let center;
let centerRadius = 200;

// Definition for triangle containment
// x1 y1, x2 y2, x3 y3
let triPoints = [-200, 100, 0, -225, 200, 100];

function setup() {
  colorMode(HSB);
  pixelDensity(3)
  c = createCanvas(500, 500);
  // background(210);
  cX = width / 2;
  cY = height / 2;
  center = cX, cY;

  for (let i = 0; i < colors.length; i++) {
    let r = floor(random(255));
    let g = floor(random(50, 180));
    let b = floor(random(100, 200));
    colors[i][0] = r;
    colors[i][1] = g;
    colors[i][2] = b;
  }

  for (let i = 0; i < 250; i++) {
    let newWalker = new Walker();
    walkers.push(newWalker);
  }
}

function draw() {
  translate(width / 2, height / 2);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
  }
}

function Walker() {
  let x = random(-200, 200);
  let y = random(-200, 200);

  let rcol = floor(random(5))
  let color = colors[rcol]

  let halftoneValues = [0, 15, 45, 75];
  let halftonePicker = floor(random(4));
  let halftone = halftoneValues[halftonePicker];
  let xHT, yHT;

  this.halftoneCalc = function (x, y) {
    xHT = (x * cos(halftone)) + (y * sin(halftone));
    yHT = (y * cos(halftone)) - (x * sin(halftone));
  }

  this.circleCalculator = function (xC, yC) {
    if ((xC) ** 2 + (yC) ** 2 < (centerRadius) ** 2 && (xC) ** 2 + (yC) ** 2 > (centerRadius-100) ** 2) {
      point(xC, yC);
    } else {
      return;
    }
  }

  this.triangleCalculator = function (xC, yC) {
    
  }

  this.update = function () {
    let rstep = 4;
    let rstroke = random(.125, 2.75);
    let r = floor(random(8));
    switch (r) {
      case 0:
        x = x + rstep;
        break;
      case 1:
        x = x - rstep;
        break;
      case 2:
        y = y + rstep;
        break;
      case 3:
        y = y - rstep;
        break;
      case 4:
        x = x + rstep;
        y = y + rstep;
        break;
      case 5:
        x = x - rstep;
        y = y + rstep;
        break;
      case 6:
        x = x - rstep;
        y = y - rstep;
        break;
      case 7:
        x = x + rstep;
        y = y - rstep;
        break;
    }
    stroke(color);
    strokeWeight(rstroke);
    this.halftoneCalc(x, y);
    this.circleCalculator(xHT, yHT);
    // if (this.containmentCalculator(xHT, yHT)) {
    //   point(xHT, yHT);
    // }
  }
}

function mouseClicked() {
  save(c, `${frameCount}.png`)
}