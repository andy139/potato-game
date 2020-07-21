const CONSTANTS = {
  OBJECT_SPEED: 8,
  WARM_UP_SECONDS: 2,
  OBJECT_SPACING: 250,
  HEIGHT: 50,
  
}




export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    const firstObjectDistance = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.OBJECT_SPEED)

    // const firstObjectDistance = 50

    console.log(firstObjectDistance)
    this.objects = [
      this.randomObject(firstObjectDistance),
      this.randomObject(firstObjectDistance + CONSTANTS.OBJECT_SPACING),
      this.randomObject(firstObjectDistance + (CONSTANTS.OBJECT_SPACING * 2))

    ];

  }

  // Responsible for drawing background and obstacles "knives, fryer, innout logo" for potatoe, also responsible for control logic 
  // for how obstacles move and generated
  // Utilize animate method to control and move obstacles, calculate score, and move potatoe (make new frame)

  animate(ctx) {
    this.drawBackground(ctx)
    this.moveObjects();
    this.drawObjects(ctx);
  }

  drawBackground(ctx) {

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }


  randomObject(x) {

    const object = {
      posX: x,
      top: Math.floor(Math.random() * (this.dimensions.height)),
      passed: false,
    }

    return object
    
  }

  moveObjects() {
    this.eachObject(function (object) {
      object.posX -= CONSTANTS.OBJECT_SPEED
    })

    // ADD new objects if one object reach end 
    if (this.objects[0].posX <= 0) {
      this.objects.shift();
      const newObj = this.objects[1].posX + CONSTANTS.OBJECT_SPACING;
      this.objects.push(this.randomObject(newObj))
    }
  }


  eachObject(callback) {
    this.objects.forEach(callback.bind(this));
  }

  drawObjects(ctx) {
    this.eachObject(function (object) {
      let newObject = new Image();
      newObject.src = './sprites/potato.png';

      //draw object
      ctx.drawImage(
        newObject,
        object.posX,
        object.top,

      )


    })
  }


  

  
}