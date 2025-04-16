let x;
let y;
let i;
let xspeed;
let yspeed;
let array;
let rain;
let j;
let max;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  textSize(width / 20);
  i = 1;
  j = 1;
  max = 8;
  array = ['Spassgetränk', 'Spassgetränk?', 'Spassgetränk', 'Spassgetränk', 'Spassgetränk', 'Spassgetränk', 'Spassgetränk', 'Spassgetränk'];
  rain = ['rgba(0, 68, 220, 1)', 'rgba(0, 175, 175, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 255, 0, 1)', 'rgba(255, 146, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 255, 1)'];
}

function draw() {
  background(0, 0, 0);
  let c = color(rain[j]);
  fill(c);
  text(array[i], 30 + x, 30 + y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + textWidth(array[i]) >= width - 20) {
    x = width - textWidth(array[i + 1]) - 21;
    xspeed = -xspeed;
    nextColorText();
  }
  if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    nextColorText();
  }

  if (y >= height - 30) {
    yspeed = -yspeed;
    y = height - 30;
    nextColorText();
  }
  if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    nextColorText();
  }
}

function nextColorText() {
  i = i + 1;
  j = j + 1;
  if (i >= max) {
    i = 0;
  }
  if (j >= rain.length) {
    j = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(width / 20); // Neue Textgröße bei Resize
}
