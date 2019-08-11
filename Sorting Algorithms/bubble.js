var width, height, size, snake, food, scale, iloop, jloop, f, s;
function setup(){
  width = 1000;
  height = 600;
  size = 25;
  createCanvas(width, height);
  bars = [];
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*random(1,height/size), size)
  }
  iloop = 0, jloop = 0;
}

function draw(){
  background(0);
  frameRate(30);
  if(bars[jloop].height > bars[jloop+1].height){
    f = jloop;
    s = jloop + 1;
    temp = bars[jloop].height;
    bars[jloop].height = bars[jloop+1].height;
    bars[jloop+1].height = temp;
    

    temp = bars[jloop].y;
    bars[jloop].y = bars[jloop+1].y;
    bars[jloop+1].y = temp;
  }
  jloop++;
  if(jloop >= bars.length - iloop - 1){
    jloop = 0;
    iloop++;
  }
  drawBlocks(f, s);
  if(iloop == bars.length - 1){
    console.log("END!");
    noLoop();
    drawBlocks();
  }

}

function drawBlocks(f, s){
  for(var x = 0; x < bars.length; x++){
    if(x == f || x == s)
      fill(255, 0, 0);
    else
      fill(255);
    bars[x].show();
    console.log(bars[x]);
  }
  fill(255);
}

function randomize(){
  for(var i = 0, x = 0; i < width/size; i++, x += size){
    bars[i] = new Bars(x, size*floor(random(1,height/size)), size)
    console.log(bars[i].height);
  }
}
class Bars{
  constructor(x, y, width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height - y;
  }

  show(){
    rect(this.x, this.y, this.width, this.height);
  }

}