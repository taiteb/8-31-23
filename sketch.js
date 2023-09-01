let walkers = [];
let c;

function setup() {
  pixelDensity(3)
  c = createCanvas(700, 700);
  background(210);
  for (let i = 0; i < 150; i++) {
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
  let x = random(200, 500);
  let y = random(200, 500);
  // console.log(x, y);

  let r = floor(random(20, 200));
  let g = floor(random(10,120));
  let b = floor(random(80, 150));

  let rstroke = random(2);
  let rstep = floor(random(5));

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
    point(x, y);
  }
}

function mouseClicked() {
  save(c, `${frameCount}.png`)
}