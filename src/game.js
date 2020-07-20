import Level from './level';


export default class PotatoeGame {
  constructor(canvas) {
    // Inputted html canvas dom element
    this.ctx = canvas.getContext("2d"); // Allow us to draw shape on page
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  restart() {
    this.level = new Level(this.dimensions)
    this.animate();

  }


  animate() {
    this.level.animate(this.ctx);
    
  }



}