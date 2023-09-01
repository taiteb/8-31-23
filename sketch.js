let walkers = [];

function setup() {
  createCanvas(700, 700);
  background(51);
  for (let i = 0; i < 150; i++){
    let newWalker = new Walker();
    walkers.push(newWalker);
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++){
    walkers[i].update();
  }
// console.log(walkers)
}

function Walker() {
  let x = random(100, 600);
  let y = random(100, 600);
  // console.log(x, y);

  let r = floor(random(120));
  let g = floor(random(255));
  let b = floor(random(120, 255));

  let rstroke = random(5);

  this.update = function(){
    let r = floor(random(4));
    // console.log(r)
    switch (r) {
      case 0:
        x = x + 2;
        break;
      case 1:
        x = x - 2;
        break;
      case 2:
        y = y + 2;
        break;
      case 3:
        y = y - 2;
        break;
    }
    stroke(r, g, b);
    strokeWeight(rstroke);
    point(x, y);
  }
}