const OBJECT_SPECS = {
    SPEED: 10,
    WIDTH: 30,
    HEIGHT: 35,

}

export default class MovingObjects {
    constructor(dimensions) {
        this.dimensions = dimensions;
        // this.x = 30
        // this.y = 30;
        this.y = Math.floor(Math.random() * (this.dimensions.height));
        this.x = this.dimensions.width - 30;
    }

    drawObject(ctx) {
        let object = new Image();
        object.src = './sprites/knife.png'
        ctx.drawImage(
            object,
            193,
            0,
            30,
            35,
            this.x,
            this.y,
            30,
            35
        )

    }

    animate(ctx) {
        this.drawObject(ctx);
    }



}