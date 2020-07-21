import Level from './level';
import Potato from './potato'


export default class PotatoeGame {
  constructor(canvas) {
    // Inputted html canvas dom element
    this.ctx = canvas.getContext("2d"); // Allow us to draw shape on page
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    // this.play();

    this.handleClick();
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.distance = 0;


    this.level = new Level(this.dimensions)
    this.potato = new Potato(this.dimensions)
    
    this.animate();

  }

  play() {
    this.running = true;
    this.animate();
  }

  // registerClick() {
    
  // }

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
  }

  startFly() {
    if (!this.running) {
      this.play();
    }

    console.log("mousedown hold")
    this.flyInterval = setInterval(this.flyHandler, 1000/20)

  }
  
  stopFly() {
    console.log('mouse up')
    clearInterval(this.flyInterval);
  }


  animate() {
    // First move level
    this.level.animate(this.ctx);
    // Move and draw potato
    this.potato.animate(this.ctx);



    if (this.running) {
      
      requestAnimationFrame(this.animate.bind(this))
    }

    
  }



}