

let hashiv = 0;
const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
    };


   const canvas = document.getElementById("canvas");
   const context = canvas.getContext("2d");
   canvas.width = 400;
   canvas.height = 300;


   const background = new Image();
   background.src = "https://webgradients.com/public/webgradients_png/006%20Lady%20Lips.png";
   

   const butterfly = new Image();
   butterfly.src= "https://i.pinimg.com/originals/dc/b4/05/dcb40592c11bc5126f50c3d2c1b5da2b.png";


   const flower = new Image();
   flower.src = "https://cdn158.picsart.com/225524786016202.png?r1024x1024";

   const bee = new Image();
   bee.src = "https://mbtskoudsalg.com/images/cute-bee-png-3.png";

   const createBees = function(count, canvasWidth, canvasHeight){
   const base = [];
    for(let  i = 0; i< count; i++){
        base[base.length]= {
     x: rand(canvasWidth-30),
     y: rand(canvasHeight-30),
     width: 50,
     height: 50,
     xDelta: 1,         
     yDelta:  1,     
     image: bee,
     draw: function(){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
     },
     update: function(){
         this.x += this.xDelta;
         this.y += this.yDelta;
         if(this.x + 50 > canvas.width || this.x < 0 ){
            this.xDelta *= -1;
            this.yDelta *= 1;
        }
        if(this.y + 50 > canvas.height || this.y < 0){
            this.yDelta *= -1;
        }
         
       
    }
    }

} 
return base;
}

const createFlowers = function(count, canvasWidth, canvasHeight){
const base = [];
    for(let  i = 0; i< count; i++){
        base[base.length]= {
     x: rand(canvasWidth-30),
     y: rand(canvasHeight-30),
     width: 30,
     height: 30,     
     image: flower,
     draw: function(){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
     },
        }

    } 
 return base;
 };


   const hero = {
       x:rand(canvas.width - 30),
       y:rand(canvas.height - 30),
       width: 30,
       height: 30,
       xDelta: 0,
       yDelta: 0,
       image: butterfly,
       draw: function(){
       context.drawImage(this.image, this.x, this.y, this.width, this.height);
       },
       update: function(boxik){
        for(let i = 0; i < boxik.length;i++){
            
            

            if(this.x < boxik[i].x +boxik[i].width  && this.x + this.width > boxik[i].x &&
               this.y < boxik[i].y + boxik[i].height && this.y + this.height > boxik[i].y )  {
                   alert("game over!!!!!!!! " + "your score is "+hashiv);

            }
        
        }
         
            this.x += this.xDelta;
            this.y += this.yDelta;
       },
       update1: function(boxa){
        for(let i = 0; i < boxa.length;i++){
            
            if(this.x < boxa[i].x +boxa[i].width  && this.x + this.width > boxa[i].x &&
               this.y < boxa[i].y + boxa[i].height && this.y + this.height > boxa[i].y )  {
                    boxa.splice(i, 1);
                    hashiv += 1;
                    console.log(hashiv);
            }
        }
       },

   };

   const leftKey = 37;
   const upKey = 38;
   const rightKey = 39;
   const downKey = 40;
   document.addEventListener("keydown", function(event){
       if(event.keyCode === upKey) {
        hero.yDelta = -3;
       }
       if(event.keyCode === leftKey) {
        hero.xDelta = -3;
       }
       if(event.keyCode === rightKey) {
        hero.xDelta = 3;
       }
       if(event.keyCode === downKey) {
        hero.yDelta = 3;
       }
   }, false)
   document.addEventListener("keyup", function(event){
       
        hero.xDelta = 0;
        hero.yDelta = 0;
       
   }, false)

   const a = createBees(3, canvas.width, canvas.height);
   const flowerCoin = createFlowers(15, canvas.width, canvas.height)

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

   const drawF = function(boxes){

    for(let i = 0;i< boxes.length; i++) {
        boxes[i].draw();

    }
 }




   const loop = function(){
    
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    draw(a);
    update(a);
    drawF(flowerCoin);
   

    hero.draw();
  
    hero.update(a);
    hero.update1(flowerCoin); 
    requestAnimationFrame(loop);
   }
   loop();
    