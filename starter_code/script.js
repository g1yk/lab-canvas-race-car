console.log('hi')


let canvas = document.getElementById('game-board')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d')

ctx.fillStyle = '#bbb'
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
console.log(ctx)




class Cone {
  constructor(x, y, width, height) {
    this.x = x,
      this.y = y,
      this.width = width,
      this.height = height;
  }
  loadCone = () => {
    let coneImg = new Image();
    coneImg.src = './images/cone.png'

    coneImg.onload = () => {
      ctx.drawImage(coneImg, this.x, this.y, this.width, this.height)
    }
  }
}
let cone = new Cone(20, 20, 40, 60)

class Car {
  constructor(x, y, width, height) {
    this.x = x,
      this.y = y,
      this.width = width,
      this.height = height;
  }
  loadCar = () => {
    let img = new Image();
    img.src = './images/car.png'
    img.onload = () => {
      ctx.drawImage(img, this.x, this.y, this.width, this.height)
    }
  }
  moveCar = (direction) => {
    this[direction] += 100;
    console.log(this)
  }
}

let camero = new Car(500, 500, 50, 80)
camero.loadCar()


