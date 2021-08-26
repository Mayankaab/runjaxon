var bg
var path
var boy
var boyImage
function preload(){
  //pre-load images
path=loadImage('path.png')
boyImage=loadAnimation('Runner-1.png','Runner-2.png')
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 bg = createSprite(200,200,400,400)
bg.addImage(path)
bg.scale=1.0
bg.velocityY=4
boy = createSprite(100,100,10,10)
boy.addAnimation('running',boyImage)
boy.scale=0.1
left = createSprite(0,0,100,800)
right = createSprite(400,0,100,800)
}
function draw() {
  background(0);
drawSprites()
if(bg.y>400){
  bg.y=height/2
  console.log(bg.y)
}
boy.x=World.mouseX
boy.collide(left)
boy.collide(right)
}
