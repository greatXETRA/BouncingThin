
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
  i =1;
  j=1
  max=8;
  array = ['Wie geht es Ihnen?','Welche Farbe mögen Sie?','Warum?','Ist es warm?','Es ist Februar','Mögen Sie Katzenfutter?','Tragen Sie Schuhe?','Können wir uns duzen?'];
  rain = ['rgba(0, 68, 220, 1)','rgba(0, 175, 175, 1)','rgba(0, 255, 0, 1)','rgba(255, 255, 0, 1)','rgba(255, 146, 0, 1)','rgba(255, 0, 0, 1)','rgba(255, 0, 255, 1)',]
}
