const colorArray = ["black", "green", "yellow", "purple"];
const items = [0,1];
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
    };

const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
canvas.height =500;
canvas.width = 500;
//context.fillStyle = "yellow";
// context.fillRect(0, 0, canvas.width, canvas.height);   //what are these doing?

const createBoxes = function(count, canvasWidth, canvasHeight){
const base = [];
    for(let i = 0; i< count; i++){
        base[base.length]= {
     x: rand(canvasWidth-30),
     y: rand(canvasHeight-30),
     width: 30,
     height: 30,
     xDelta:0.1,         //Math.round(Math.random()),
     yDelta:  0.1,     //Math.round(Math.random()),
     color: colorArray[rand(colorArray.length) - 1],
     draw: function(){
          context.fillStyle = this.color;
         context.fillRect(this.x, this.y, this.width, this.height);
     },
     update: function(){
         this.x += this.xDelta;
         this.y += this.yDelta;
         if(this.x + 30 > canvas.width || this.x < 0 ){
            this.xDelta *= -1;
            this.yDelta *= 1;
        }
        if(this.y + 30 > canvas.height || this.y < 0){
            this.yDelta *= -1;
        }
         
       
    }
    }

} 
return base;
}
const a = createBoxes(16, canvas.width, canvas.height);

const draw = function(boxes) {
 
    for(let i = 0;i< boxes.length; i++) {
        boxes[i].draw();
    }
}

const update = function(boxes) {
    for(let i = 0; i< boxes.length; i++){
        boxes[i].update();
        
    }
}

const loop = function() {
    context.fillStyle = "pink";
    context.fillRect(0,0,canvas.width, canvas.height);
    draw(a);
    update(a);
    requestAnimationFrame(loop);
}

loop();