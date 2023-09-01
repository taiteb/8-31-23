let walkers = [];
let c;
let colors = [[90, 169, 230], [127, 200, 248], [249, 249, 249], [255, 228, 94], [255, 99, 146]];

let center;
let centerRadius = 250;

function setup() {
  pixelDensity(3)
  c = createCanvas(500, 500);
  // background(210);
  cX = width / 2;
  cY = height / 2;
  center = cX, cY;

  // for (let i = 0; i < colors.length; i++) {
  //   let r = floor(random(90));
  //   let g = floor(random(90, 255));
  //   let b = floor(random(100, 255));
  //   colors[i][0] = r;
  //   colors[i][1] = g;
  //   colors[i][2] = b;
  // }

  for (let i = 0; i < 250; i++) {
    let newWalker = new Walker();
    walkers.push(newWalker);
  }
}

function draw() {
  translate(width/2, height/2); 
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

  this.containmentCalculator = function (xC, yC) {
    if ((xC) ** 2 + (yC) ** 2 < (centerRadius) ** 2 && (xC) ** 2 + (yC) ** 2 > (centerRadius - 150) ** 2) {
      point(xC, yC);
    } else {
      return false;
    }
  }

  this.update = function () {
    let rstep = 4;
    let rstroke = 2;
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
    this.containmentCalculator(xHT, yHT);
    // if (this.containmentCalculator(xHT, yHT)) {
    //   point(xHT, yHT);
    // }
  }
}

function mouseClicked() {
  save(c, `${frameCount}.png`)
}