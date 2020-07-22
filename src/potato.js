const POTATO_SPECS = {
    POTATO_WIDTH: 40,
    POTATO_HEIGHT: 40,
    FLY_SPEED: 9,
    SPEED: 3,
    ACCELERATION: 1.2,
    TERMINAL_VELOCITY: 12,
    GRAVITY_CONSTANT: 0.7,

}

const TO_RADIANS = Math.PI/180

export default class Potatoe {
    constructor(dimensions) {
        this.velocity = 0
        this.dimensions = dimensions
        this.x = this.dimensions.height / 10
        this.y = this.dimensions.height / 2

        this.potatoImg = new Image();
        this.potatoImg.src = './sprites/potato.png';
    
    }

    animate(ctx) {
        this.drawPotato(ctx)
        this.movePotato()
       
    }

    drawPotato(ctx) {
        // ctx.fillStyle="yellow"
        // ctx.fillRect(this.x, this.y, POTATO_SPECS.POTATO_WIDTH, POTATO_SPECS.POTATO_HEIGHT)

        ctx.drawImage(
            this.potatoImg,
            this.x,
            this.y,

        )
    
        

  

        // ctx.rect(this.x,this.y,100,100)


    }


    fly() {
        this.velocity = -1 * POTATO_SPECS.FLY_SPEED;
    }

    falling() {
        
    }

    movePotato() {
        // for each frame, potatoe must move by its velcoity
        // velocity is pixels per frame, each frame it should update position by velocity
        this.y += this.velocity;

        //the acceleration of gravity is in pixels per second per second
        // at each second, it changes the velocity by whatever the gravity const is
        this.velocity += POTATO_SPECS.GRAVITY_CONSTANT
        
    }

    bounds() {
        return {
            left: this.x,
            right: this.x + POTATO_SPECS.POTATO_WIDTH,
            top: this.y,
            bottom: this.y + POTATO_SPECS.POTATO_HEIGHT,
        }
    }

    outOfBounds() {
        const isAboveCanvas = this.y < 0;
        const isBelowCanvas = this.y + POTATO_SPECS.POTATO_HEIGHT > this.dimensions.height;
        return isAboveCanvas || isBelowCanvas



    }

   

}