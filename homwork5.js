const colorArray = ["red", "green", "yellow", "pink"];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
    };

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
canvas.height =500;
canvas.width = 500;
context.fillStyle = "red";
context.fillRect(0, 0, canvas.width, canvas.height);

const createBoxes = function(count, canvasWidth, canvasHeight){

    return [
        {
     x: rand(canvasWidth),
     y: rand(canvasHeight),
     width: 30,
     height: 30,
     xDelta: 31,
     yDelta: 31,
     color: colorArray[rand(colorArray.length) - 1],
     draw: function(){
          context.fillStyle = "green";
// console.log(this.x, this.y, this.width, this.height)
         context.fillRect(this.x, this.y, this.width, this.height);
     },
     update: function(){
         this.x += this.xDelta;
         this.y += this.yDelta;

     }
    }
]
} 

const a = createBoxes(2, canvas.width, canvas.height);

const draw = function() {
//     context.fillStyle = colorArray[rand(colorArray.length) - 1];
//     context.fillRect(0,0, canvas.height, canvas.width);
    for(let i = 0;i< a.length; i++) {
        const obj =a[i];
        obj.draw();
    }
}

const update = function() {
    for(let i = 0; i< a.length; i++){
        const obj = a[i];
        obj.update();
    }
}

const loop = function() {
    draw();
    update();
    requestAnimationFrame(loop);
}

loop();