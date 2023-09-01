let walkers = [];
let c;

function setup() {
  pixelDensity(3)
  c = createCanvas(500, 500);
  // background(210);
  for (let i = 0; i < colors.length; i++){
    let r = floor(random(255));
    let g = floor(random(255));
    let b = floor(random(255));
  }
  for (let i = 0; i < 350; i++) {
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
  let x = random(100, (width-100));
  let y = random(100, (height-100));
  // console.log(x, y);

  let r = floor(random(255));
  let g = floor(random(255));
  let b = floor(random(255));

  let rstroke = .8;
  let rstep = floor(random(2));

  let halftoneValues = [0, 15, 45, 75];
  let halftonePicker = floor(random(4));
  let halftone = halftoneValues[halftonePicker];
  let xHT, yHT;

  this.halftoneCalc = function(x, y){
    xHT = (x*cos(halftone)) + (y*sin(halftone));
    yHT = (y*cos(halftone)) - (x*sin(halftone));
  }

  this.update = function () {
    let r = floor(random(8));
    // console.log(r)
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
    stroke(r, g, b);
    strokeWeight(rstroke);
    this.halftoneCalc(x, y);
    point(xHT, yHT);
  }
}

function mouseClicked() {
  save(c, `${frameCount}.png`)
}