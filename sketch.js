var  player;
var playerimg;
var en1,en2,en3,en4,enemy;
var bgroup, egroup ,bgimg;
var score=0;
var start=0;
var play=1;
var end=2;
var gstate=start;
var count=0;
var shoot,gameover,bgsound;

function preload(){
  playerimg=loadImage("image/ufo.png")
  en1=loadImage("image/alien.png")
  en2=loadImage("image/alien 2.png")
  en3=loadImage("image/alien3.png")
  en4=loadImage("image/alien4.png")
  bgimg=loadImage("image/bg.jpg")
  shoot=loadSound("image/gun.mp3")
  gameover=loadSound("image/gameover.wav")
  bgsound=loadSound("image/bg.wav")
}


function setup() {
  createCanvas(800,400);
  bgsprite=createSprite(400,200,800,400);
  bgsprite.addImage(bgimg)
  player = createSprite(400, 200, 50, 50);
  player.addImage("ufo",playerimg)
  player.y=320 ;
  
  player.scale=0.1;
  bgroup=new Group();
  egroup=new Group();
  bgsound.play();

}

function draw() {

    background("black");  
  drawSprites();

  /* if(score%2===0){
        
        count++;
    

 if (count<50) {
   if(count<10){
     textSize(20);
     fill("white");
   }
   else if(count>9 &&count<20){
      textSize(25);
   }
    else if(count>19 &&count<30){
      textSize(30);
   }
    else if(count>29 &&count<40){
      textSize(35);
   }
   else if(count>39 &&count<50){
      textSize(40);
   }
    text("GOOD JOB", width/2-50, 200);
    
  }
  count=0;
}
*/
  
textSize(19);
fill("white");
text("Score:"+score,650,40)



if(gstate===start){

  textSize(40);
  fill("white");
  var text1=text("GALAXY WAR",275,100)

  textSize(30);
  fill("white");
  text("Instructions",315,170)

  textSize(15);
  fill("white");
  text("1. Use Your Arrow Keys To Move Player",275,200)

  textSize(15);
  fill("white");
  text("2. Press Bar to Shoot",315,240)
  
}else if (gstate===play){
  
   
  textSize(15);
  fill("white");
  text("Playing mode",650,60)
  

  bgsprite.velocityY=(4+score/2);
  if(egroup.isTouching(player)){
 
  gstate=end;
  gameover.play();
  bgsound.stop();
    
       }
}else if(gstate===end){

  textSize(50);
  fill("white");
  text("Game End",290,170)
  

  textSize(30);
  fill("white");
  text("press space to restart",280,210)
  
  bgsprite.velocityY=0;
    player.velocityY = 0;
    egroup.setVelocityYEach(0);
    egroup.destroyEach();
    


  if(keyWentUp("space")){
    gstate=play;
    
 
    }

}







if(bgsprite.y>=400){
  bgsprite.y=200;
}

  if(keyDown(UP_ARROW)){
   player.velocityY=-4;

  }
  if(keyDown(DOWN_ARROW)){
    player.velocityY=4;
 
   }if(keyDown(LEFT_ARROW)){
    player.velocityX=-4;
 
   }if(keyDown(RIGHT_ARROW)){
    player.velocityX=4;
 
   }if(keyWentUp("up")||keyWentUp("down")||keyWentUp("right")||keyWentUp("left")){
     player.velocityX=0;
     player.velocityY=0;
   }
   if(keyWentUp("space")){
   bullet=createSprite(player.x,player.y,6,16);
   bullet.shapeColor="white";
   bullet.velocityY=-5;
   bgroup.add(bullet);
   gstate=play;
   shoot.play();

   }
   if(egroup.isTouching(bgroup)){

bgroup.destroyEach();
egroup.destroyEach();
score++

   }
   spawn_en();
}
function spawn_en(){

if(frameCount%100===0){
  enemy=createSprite(random(50,750),0,50,50);
  enemy.velocityY=(4+score/2);

  
  var rand=Math.round(random(1,4));
  switch(rand){

    case 1:enemy.addImage('en11',en1);
    break;

    case 2:enemy.addImage('en12',en2);
    break;

    case 3:enemy.addImage('en13',en3);
    break;

    case 4:enemy.addImage('en14',en4);
    break;

    default : break;

  }
  enemy.scale=0.1;
  egroup.add(enemy);
}
}