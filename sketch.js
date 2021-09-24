
var box;
function setup() {
  createCanvas(400, 400);
  

}

function draw() {
  background('blue');
  box = rect(200,200,30,30);
  
  if(keyIsDown(RIGHT_ARROW))
  {
    box.position.x = box.position.x + 3;
  }
}