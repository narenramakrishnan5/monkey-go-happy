var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png")
obstaceImage=loadImage("")
}

function setup() {
  createCanvas(600, 600);
  
 

  var survivalTime=0;
  
  
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", player_running);
  
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
    backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
 
  
}


function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
    if(backgr.x<100) {
    backgr.x=backgr.width/2;
  }
    if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
   
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
   if(obstaclesGroup.isTouching(player)){ 
        player.scale=0.08;
     
    }
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}




function spawnFood() {
 
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
       
    obstacle.lifetime = 300;
    
    
    obstaclesGroup.add(obstacle);
  }
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
        
    obstacle.lifetime = 300;
    
   
    obstaclesGroup.add(obstacle);
  }
}
