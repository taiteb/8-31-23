let walkers = [];
let c;
let colors = [[],[],[],[],[],[],[],[]]

function setup() {
  pixelDensity(3)
  c = createCanvas(500, 500);
  // background(210);

  for (let i = 0; i < colors.length; i++){
    let r = floor(random(90));
    let g = floor(random(90, 255));
    let b = floor(random(100, 255));
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
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
  }
  // console.log(walkers)
}

function Walker() {
  let x = random(100, 400);
  let y = random(100, 400);
  // console.log(x, y);

  let rcol = floor(random(8))
  let color = colors[rcol]

  

  let halftoneValues = [0, 15, 45, 75];
  let halftonePicker = floor(random(4));
  let halftone = halftoneValues[halftonePicker];
  let xHT, yHT;

  this.halftoneCalc = function(x, y){
    xHT = (x*cos(halftone)) + (y*sin(halftone));
    yHT = (y*cos(halftone)) - (x*sin(halftone));
  }

  this.update = function () {
    let rstep = floor(random(3));
    let rstroke = random(.125, .8);
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
    console.log(color)
    strokeWeight(rstroke);
    this.halftoneCalc(x, y);
    point(xHT, yHT);
  }
}

function mouseClicked() {
  save(c, `${frameCount}.png`)
}