import Level from './level';
import Potato from './potato';
import Intro from './game_intro';


export default class PotatoeGame {
  constructor(canvas) {
    // Inputted html canvas dom element

    this.ctx = canvas.getContext("2d"); // Allow us to draw shape on page
    
    
    this.dimensions = { width: canvas.width, height: canvas.height };

    this.highDistance = 0;
    
    this.handleClick();
    this.restart();

    
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.distance = 0;


    this.level = new Level(this.dimensions);
    this.potato = new Potato(this.dimensions);

    this.animate();
    this.drawInstructions();
   


  }

  play() {
    this.running = true;
    this.animate();
  }


  handleClick() {
    // this.clickHandler = this.click.bind(this);
    this.startFlying = this.startFly.bind(this);
    this.stopFlying = this.stopFly.bind(this);
    this.flyHandler = this.flyHandler.bind(this);
    this.ctx.canvas.addEventListener("mousedown", this.startFlying)
    this.ctx.canvas.addEventListener("mouseup", this.stopFlying)
  }

  flyHandler() {  

    this.potato.fly()
    this.potato.acceleration = this.potato.acceleration * 1.11

  }

  startFly() {
    if (!this.running) {
      this.play();
    }

    this.flyInterval = setInterval(this.flyHandler, 1000/20)

  }
  
  stopFly() {

    clearInterval(this.flyInterval);
    this.potato.acceleration = 1;
  }

  //Game over if either potato collides with object or potato out of bounds

  gameOver() {
    return (
      this.level.isCollide(this.potato.bounds()) || this.potato.outOfBounds()
    )
    
  }

  drawInstructions() {
    const textLoc = {
      x: this.dimensions.width - 100,
      y: this.dimensions.height - 100
    }

    const instructions = `Hold your left mouse button to fly your potato up, and release to go down`


    wrapText(this.ctx, instructions, this.dimensions.width - 300, this.dimensions.height - 150, 250, 25)



    
  }


  drawScore() {
    
    // top left for score
    const rectangle = {
      x: 10,
      y: 10,
      width: 150,
      height: 125,
  
    }

    const scoreText = {
      x: 20,
      y: 30,

    }

    const score = {
      x: 20,
      y: 60
    }

    const highScoreText = {
      x: 20,
      y: 90,
    }

    const highScore = {
      x: 20,
      y: 120
    }

    this.ctx.fillStyle = 'rgba(225,225,225,0.5)';
    this.ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
 
    
    this.ctx.stroke();
    this.ctx.font = "bold 15pt serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Distance:`, scoreText.x, scoreText.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(`Distance:`, scoreText.x, scoreText.y);


    this.ctx.stroke();
    this.ctx.font = "bold 20pt serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.distance}`, score.x, score.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(`${this.distance}`, score.x, score.y);


    this.ctx.stroke();
    this.ctx.font = "bold 15pt serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`High Score:`, highScoreText.x, highScoreText.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(`High Score:`, highScoreText.x, highScoreText.y);


    this.ctx.stroke();
    this.ctx.font = "bold 20pt serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.highDistance}`, highScore.x, highScore.y);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(`${this.highDistance}`, highScore.x, highScore.y);

  }




  animate() {

    
    // First move level
    this.level.animate(this.ctx);
    // Move and draw potato
    this.potato.animate(this.ctx);



    this.drawScore();

   

 


    if (this.gameOver()) {


      if (this.distance > this.highDistance) {
        this.highDistance = this.distance

      }
      this.restart();
    }


    if (this.running) {
      this.distance += 1
    }

    // Implement score when shooting targets?? to be decided
    this.level.passedObject(this.potato.bounds(), () => {
      this.score += 1;

      
    })


    if (this.running) {
      
      requestAnimationFrame(this.animate.bind(this))
    }


  }



}


// Helper method to wrap paragraph text

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

