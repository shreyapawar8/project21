
var block1,block2,block3,block4;
var ball;
var music;

function preload(){
  music=loadSound("music.mp3")
}


function setup(){
    createCanvas(800,600);

    block1 = createSprite(100,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,190,30);
    block2.shapeColor = "green";

    block3 = createSprite(500,580,190,30);
    block3.shapeColor = "red";


    block4= createSprite(700,580,190,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(10,750),100,20,20);
    ball.shapeColor = "white";
    ball.velocityX=4
    ball.velocityY=4


}


function draw() {
    background(rgb(169,169,169));

    if(ball.x<0){
music.stop()
    ball.velocityX=3
    }
    else if(ball.x>800){
        music.stop()
            ball.velocityX=-3
            }
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }
else if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor = "green";
    music.play();
}

else if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = "red";
    music.play();
}

else if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor = "yellow";
    music.play();
}

if(ball.y<0)
{
    ball.velocityY=3
}


drawSprites();

}


















