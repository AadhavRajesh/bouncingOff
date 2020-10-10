var fr,mr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(200,200,50,50);
  fr.shapeColor="green";
  fr.debug=true;
  mr=createSprite(400,200,80,30);
  mr.shapeColor="green";
  mr.debug=true;
  mr.velocityX=5

  go1=createSprite(300,200,50,50);
  go1.shapeColor="yellow";
  go2=createSprite(200,200,50,50);
 go2.shapeColor="purple";
 go2.velocityX=-5;
}

function draw() {
  background(0);  
 mr.x=World.mouseX;
 mr.y=World.mouseY;

 if (isTouching(go1,mr)) {
  go1.shapeColor="red";
  mr.shapeColor="red";
 }
 else{
  mr.shapeColor="green";
  go1.shapeColor="yellow";
 }

 bounceOff(mr,go2);
  drawSprites();
}



function bounceOff(o1,o2){
  if(o1.x-o2.x < o1.width/2+o2.width/2 &&
    o2.x-o2.x<o2.width/2+o1.width/2 ){
    o1.velocityX=o1.velocityX*(-1)  
    o2.velocityX=o2.velocityX*(-1)
    }

  if(o2.y-o2.y<o2.height/2+o2.height/2 &&
    o1.y-o2.y<o1.height/2+o2.height/2){
      o1.velocityY=o1.velocityY*(-1)
      o2.velocityY=o2.velocityY*(-1)

}

}