export default class Intro {
    constructor(dimensions) {
        this.dimensions = dimensions;


    }

    drawBackground(ctx) {

        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }




    animate(ctx) {
        this.drawBackground(ctx)
      

    }


}