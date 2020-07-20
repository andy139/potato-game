import Level from './level';
import Potato from './potato'


export default class PotatoeGame {
  constructor(canvas) {
    // Inputted html canvas dom element
    this.ctx = canvas.getContext("2d"); // Allow us to draw shape on page
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    this.play();
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

  click(e) {
    if (!this.running) {
      this.play();
    }
    this.potato.flap();
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