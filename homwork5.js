const colorArray = ["black", "green", "yellow", "pink"];
const colorArray1 = ["grey", "purple", "blue", "white"];
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
const boxes = [];
for(let i = 0; i < count; i++){
    boxes[boxes.length] =
        {
     x: rand(canvasWidth - 30),
     y: rand(canvasHeight - 30), 
     width: 30,
     height: 30,
     xDelta: 6,
     yDelta: 6,
     color: colorArray[rand(colorArray.length) - 1],
     draw: function(){
          context.fillStyle = this.color;
         context.fillRect(this.x, this.y, this.width, this.height);
     },
     update: function(){
         this.x += this.xDelta;
         this.y += this.yDelta;
         if(this.x + this.width> canvasWidth || this.x  < 0) {
            this.color = colorArray1[rand(colorArray1.length) - 1];
            this.xDelta *= -1;
            this.yDelta *= -1;
         }
         if(this.y + this.height> canvasHeight || this.y  < 0){
             this.color = colorArray[rand(colorArray.length) - 1];
             this.xDelta *= 1;
             this.yDelta *= -1;
         }

     }
    }
}
return boxes;
 }

const manyBoxes = createBoxes(30, canvas.width, canvas.height);

const draw = function() {
   for(let i = 0;i< manyBoxes.length; i++) {
        manyBoxes[i].draw();
    }
}

const update = function() {
    for(let i = 0; i< manyBoxes.length; i++){
        manyBoxes[i].update();
    }
}

const loop = function() {
    context.fillStyle = "red";
    context.fillRect(0,0, canvas.width, canvas.height);
    draw();
    update();
    requestAnimationFrame(loop);
}

loop();