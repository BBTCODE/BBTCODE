// game constants and variables
let inputdir = {x:0,y:0};
const foodsound = new Audio("images/food.mp3");
const gameoversound = new Audio("images/gameover.mp3");
const movesound = new Audio("images/move.mp3");
const musicsound = new Audio("images/music.mp3");
let speed = 7;
let lastpainttime = 0;
let snakearr = [{x:13,y:15}];
let food = {x:5,y:7}
let score = 0;



// game functions
function main(ctime){
     window.requestAnimationFrame(main);
     if((ctime - lastpainttime)/1000 <1/speed){
          return;
     }
     
      lastpainttime = ctime;
      gameengine();
     
     
}
function iscollide(snake) {
     // if snake bump into itself
     for (let i = 1; i < snakearr.length; i++) {
          if(snake[i].x === snake[0].x && snake[i].y ===snake[0].y){
               return true;
          }
     }
     //  if snake bump into the wall
          if(snake[0].x >=19 || snake[0].x <=  0 || snake[0].y >=19 || snake[0].y <= 0){
               return true;
          }

          return false;
    
}
function gameengine(){

     // part 1:display the snake and food
     // display snake
       box.innerHTML ="";
       snakearr.forEach((e,index)=>{
          snakeelement = document.createElement('div');
          snakeelement.style.gridRowStart = e.y;
          snakeelement.style.gridColumnStart = e.x;
          if (index === 0){
               snakeelement.classList.add("head")
          }
          snakeelement.classList.add("snake")
          box.appendChild(snakeelement);
          
       })
       // display food
        foodelement = document.createElement('div');
        foodelement.style.gridRowStart = food.y;
        foodelement.style.gridColumnStart = food.x;
        foodelement.classList.add ("food")
        box.appendChild(foodelement);
//    part 2:updating the snake array & food //
        if (iscollide(snakearr)) {
          gameoversound.play();
          musicsound.pause();
          inputdir = {x:0,y:0};
          alert("Game Over....Press any key to play again....!!!!");
          score = 0;
          scorebox.innerHTML = "Score =" + 0;
          snakearr = [{x:13,y:15}]; 
          musicsound.play();
          
       }

       
     //   if snake have eaten the food, increment the score and regenerate the food
   if(snakearr[0].y=== food.y && snakearr[0].x===food.x){
     foodsound.play();
     score += 1;
    
     if(score > hiscoreval){
          hiscoreval = score;
          localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
          hiscorebox.innerHTML = "Hi-Score = " + hiscoreval;
     }
     
     scorebox.innerHTML = "Score =" + score; 
     snakearr.unshift({x:snakearr[0].x + inputdir.x,y:snakearr[0].y + inputdir.y})
     let a = 1;
     let b = 18;
     food = {x:Math.round(a + (b-a)*Math.random()),y:Math.round(a + (b-a)*Math.random())}
   }
//    moving the snake
 for (let i = snakearr.length-2; i >=0 ; i--) {
     snakearr[i+1]= {...snakearr[i]};
 }
snakearr[0].x += inputdir.x;
snakearr[0].y += inputdir.y;



// main logic start here
   let hiscore = localStorage.getItem("hiscore");
   
   if(hiscore === null){
      hiscoreval = 0;
     localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
   }else{
     hiscoreval = JSON.parse(hiscore);
     hiscorebox.innerHTML ="Hi-score =" + hiscore;
   }
   window.addEventListener("keydown",(e)=>{
         inputdir = {x:0,y:1}  // game start//
         movesound.play();
         musicsound.play();
         switch (e.key) {
          case "ArrowUp":
               inputdir.x = 0;
               inputdir.y = -1;
                break;
          case "ArrowDown":
               inputdir.x = 0;
               inputdir.y = 1;
                break;
          case "ArrowLeft":
               inputdir.x = -1;
               inputdir.y = 0;
                break;
          case "ArrowRight":
               inputdir.x = 1;
               inputdir.y = 0;
                break;
         
          default:
               break;
         }
   })



}
     


     











// main logic start here
 window.requestAnimationFrame(main);