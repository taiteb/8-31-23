let walkers = [];
let c;

function setup() {
  c = createCanvas(700, 700);
  // background(51);
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

  let r = floor(random(120));
  let g = floor(random(255));
  let b = floor(random(120, 255));

  let rstroke = random(5);
  let rstep = floor(random(5))

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