const CONSTANTS = {
  OBJECT_SPEED: 8,
  WARM_UP_SECONDS: 2,
  OBJECT_SPACING: 250,
  HEIGHT: 50,
  OBJECT_WIDTH: 100,
  OBJECT_HEIGHT: 75
  
}




export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    const firstObjectDistance = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.OBJECT_SPEED)

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

  // Method turns object status to false if passed
  passedObject(potato, callback) {
    this.eachObject((object) => {
      if (object.right < potato.left) {
        if (!object.passed) {
          object.passed = true;
          callback();
        }
        
      }
    })
  }

  drawBackground(ctx) {

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }


  randomObject(x) {

    const object = {
      left: x,
      right: CONSTANTS.OBJECT_WIDTH + x,
      top: Math.floor(Math.random() * (this.dimensions.height)),
      passed: false,
    }

    return object
    
  }

  moveObjects() {
    this.eachObject(function (object) {
      object.left -= CONSTANTS.OBJECT_SPEED
      object.right -= CONSTANTS.OBJECT_SPEED
    })

    // ADD new objects if one object reach end 
    if (this.objects[0].left <= 0) {
      this.objects.shift();
      const newObj = this.objects[1].left + CONSTANTS.OBJECT_SPACING;
      this.objects.push(this.randomObject(newObj))
    }
  }


  eachObject(callback) {
    this.objects.forEach(callback.bind(this));
  }

  drawObjects(ctx) {
    this.eachObject(function (object) {
      let newObject = new Image();
      newObject.src = './sprites/ufo.png';

      //draw object
      ctx.drawImage(
        newObject,
        object.left,
        object.top,
        CONSTANTS.OBJECT_WIDTH,
        CONSTANTS.OBJECT_HEIGHT,

      )


    })
  }


  

  
}