

var bullet

var speed, weight

var wall, thickness
function setup() {
  createCanvas(1600,400);
  
 speed=random(100,200);
weight=random(30,52);
thickness=random(22,83)

bullet = createSprite(50,200,50,20);
wall = createSprite(1000,200,thickness,height/2);  

bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  
  

  if (wall.x - bullet.x < (bullet.width + wall.width)/2);
  {
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if(deformation >= 10)
    {
      bullet.shapeColor=color(225,0,0);
    }
    
     if (deformation < 10)
     {
       bullet.shapeColor=color(0,255,0)
     }
    }
    
  drawSprites();
}
