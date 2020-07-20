export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  // Responsible for drawing background and obstacles "knives, fryer, innout logo" for potatoe, also responsible for control logic 
  // for how obstacles move and generated

  // Utilize animate method to control and move obstacles, calculate score, and move potatoe (make new frame)

  animate(ctx) {
    this.drawBackground(ctx)
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}