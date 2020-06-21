var snake;
var food;
function setup() {
  createCanvas(800,400);
  snake=createSprite(400,200,10,10);
}

function draw() {
  background(255,255,255);  

  if(food==undefined)
  {
 createFoodForSnake();
  }
  if(food!=undefined)
  {
    if(snake.isTouching(food))
    {
      food.destroy();
      snake.width=snake.width+food.width;
      food= undefined;
      //snake.visible==true;
    }
  }

  if(keyDown(UP_ARROW))
  {
    snake.y=snake.y-1;
  }
  if(keyDown(DOWN_ARROW))
  {
    snake.y=snake.y+1;
  }
  if(keyDown(RIGHT_ARROW))
  {
    snake.x=snake.x+1;
  }
  if(keyDown(LEFT_ARROW))
  {
    snake.x=snake.x-1;
  }

  
    drawSprites();
}
function createFoodForSnake()
{
  if(frameCount%50==0)
  {
    food=createSprite(random(0,400),random(0,400),10,10);
    food.shapeColor=("red");
  }
}