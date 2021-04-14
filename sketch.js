var gameState="start"
var gamestate="play"
var redbucket
var yellowbucket
var ball
var redbucketimage
var yellowbucketimage
var redballimage
var yellowballimage
var redballgroup
var yellowballgroup
var blackballimage
var blackballgroup
var restart
var restartimage
var score
score=0
function preload(){
redbucketimage =loadImage("redbasket.png")
yellowbucketimage=loadImage("yellowbasket.png")
redballimage=loadImage("ball1.png")
yellowballimage=loadImage("ball2.png")
blackballimage=loadImage("blackballimage.png")
restartimage=loadImage("restartrimage5.png")
}
function setup() {
  createCanvas(600,600);
  redbucket=createSprite(500,500,125,125)
  redbucket.addImage(redbucketimage)
  redbucket.scale=0.4
  yellowbucket=createSprite(100,500,125,125)
  yellowbucket.addImage(yellowbucketimage)
  yellowbucket.scale=0.3
  redbucket.visible=false
  yellowbucket.visible=false
  redballgroup=new Group()
yellowballgroup=new Group()
blackballgroup=new Group()
}
function draw() {
  background("lightblue");  
if(gameState==="start"){
textSize(20)
fill ("black")
text("Welcome to our game-Catch if you can",140,30)
textSize(15)
fill ("green")
text("Read all the instructions carefully before playing the game",80,80)
textSize(15)
fill(" red")
text ("Catch the red ball in the yellow bucket and yellow ball in red bucket",50,120)
textSize(15)
fill(" black")
text("You have to press left arrow and right arrow to move bucket",70,160)
textSize(15)
fill("blue")
text("You have to press A to move left side and D to move right side",70,200)
textSize(15)
fill("brown")
text("When you will press space key the game will start",100,240)
}
if( keyDown("space")){
gameState="play"
}   
if(gameState==="play"){
redbucket.visible=true
yellowbucket.visible=true
smallball()
smallball1()
obstacle()
if(keyDown(LEFT_ARROW)){
redbucket.velocityX=-5
redbucket.velocityY=0
}
if(keyDown(RIGHT_ARROW)){
  redbucket.velocityX=5
redbucket.velocityY=0
}
if(keyDown("a")){
  yellowbucket.velocityX=-5
yellowbucket.velocityY=0
}
if(keyDown("D")){
  yellowbucket.velocityX=5
  yellowbucket.velocityY=0
}
 edges =createEdgeSprites()
 redbucket.collide(edges[0])
 redbucket.collide(edges[1])
 yellowbucket.collide(edges[0])
 yellowbucket.collide(edges[1])
if(redballgroup.collide(yellowbucket)){
redballgroup.destroyEach()
score=score+1
}
if(yellowballgroup.collide(redbucket)){
yellowballgroup.destroyEach()
score=score+1
}
if(blackballgroup.collide(redbucket)||blackballgroup.collide(yellowbucket)){
gameState="end"
}
textSize(30)
fill("black")
text("Score="+score,300,50)
drawSprites()
}
if(gameState==="end"){
  textSize(75)
  fill("black")
text("Game Over",150,300)



}
}
function smallball(){
if(frameCount%40===0){
  
ball=createSprite(200,0,20,20)
ball.scale=0.09
ball.x=Math.round(random(20,550))
ball.velocityY=5
ball.addImage(redballimage)
redballgroup.add(ball)
}
}
function smallball1(){
if(frameCount%30===0){

  ball1=createSprite(200,0,20,20)
  ball1.scale=0.09
  ball1.x=Math.round(random(20,550))
  ball1.velocityY=5
  ball1.addImage(yellowballimage)
yellowballgroup.add(ball1)
}
}
function obstacle(){
if(frameCount%70===0){
  stone=createSprite(200,0,20,20)
  stone.scale=0.08
  stone.x=Math.round(random(20,550))
  stone.velocityY=5
  stone.addImage(blackballimage)
  blackballgroup.add(stone)

}
}
