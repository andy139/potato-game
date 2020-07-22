const CONSTANTS = {
  OBJECT_SPEED: 8,
  WARM_UP_SECONDS: 0.2,
  OBJECT_SPACING: 250,
  HEIGHT: 50,
  OBJECT_WIDTH: 100,
  OBJECT_HEIGHT: 75
  
}




export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    const firstObjectDistance = this.dimensions.width + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.OBJECT_SPEED)

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

  // Returns true if potato collides with any object in game
  isCollide(potato) {


    // Helper Function to see if objects overlap
    const overLap = (objectOne, objectTwo) => {

      // Check X-axis if they dont overlap
      if (objectOne.left > objectTwo.right || objectOne.right < objectTwo.left) {
        return false;
      }
      // Check y-axis if they dont overlap
      // 100 
      // 200 ObjectTwo Bottom
      // 300 ObjectOne Top
      if (objectOne.top > objectTwo.bottom || objectOne.bottom < objectTwo.top) {
        return false;
      }
      return true;
    }

    let collision = false;

    this.eachObject((object) => {
      if (overLap(object, potato)) {
        collision = true
      }

    });

    return collision


  }


  drawBackground(ctx) {

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }


  randomObject(x) {

    const randomTop = Math.floor(Math.random() * (this.dimensions.height));
    const object = {
      left: x,
      right: CONSTANTS.OBJECT_WIDTH + x,
      top: randomTop,
      bottom: randomTop + CONSTANTS.OBJECT_HEIGHT,
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
    if (this.objects[0].right <= 0) {
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