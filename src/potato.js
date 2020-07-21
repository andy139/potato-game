const POTATO_SPECS = {
    POTATO_WIDTH: 40,
    POTATO_HEIGHT: 40,
    FLY_SPEED: 8,
    SPEED: 3,
    TERMINAL_VELOCITY: 12,
    GRAVITY_CONSTANT: 0.5,

}


export default class Potatoe {
    constructor(dimensions) {
        this.velocity = 0
        this.dimensions = dimensions
        this.x = this.dimensions.height / 10
        this.y = this.dimensions.height / 2
    
    }

    animate(ctx) {
        this.movePotato()
        this.drawPotato(ctx)
    }

    drawPotato(ctx) {
        // ctx.fillStyle="yellow"
        // ctx.fillRect(this.x, this.y, POTATO_SPECS.POTATO_WIDTH, POTATO_SPECS.POTATO_HEIGHT)
        let potato = new Image();
        potato.src = './sprites/potato.png';

        ctx.drawImage(
            potato,
            this.x,
            this.y
        )
    }


    fly() {
        this.velocity = -1 * POTATO_SPECS.FLY_SPEED;
    }

    movePotato() {
        // for each frame, potatoe must move by its velcoity
        // velocity is pixels per frame, each frame it should update position by velocity
        this.y += this.velocity;

        //the acceleration of gravity is in pixels per second per second
        // at each second, it changes the velocity by whatever the gravity const is
        this.velocity += POTATO_SPECS.GRAVITY_CONSTANT
        
    }

   

}