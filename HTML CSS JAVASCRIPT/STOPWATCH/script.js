
let [seconds, minutes, hours]=[0,0,0];
let displaytime = document.getElementById("displaytime");
let timer = null;
let bg =document.getElementsByClassName("outercircle")[0];


  function stopwatchdisplay(){
       seconds++;
     if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
               minutes = 0;
               hours++;
          }
     }
     let h = hours;
     let m = minutes;
     let s = seconds;
     if (hours<10){
          h ="0" + hours;
     }
     if (minutes<10){
          m ="0" + minutes;
     }
     if (seconds<10){
          s ="0" + seconds;
     }

     displaytime.innerHTML = h+":"+ m+":"+ s;
     
 }

function watchstart(){
     if (timer !== null ){
          clearInterval(timer);
     }
     timer = setInterval(stopwatchdisplay,1000);
     bg.classList.add("animation-bg");
 }


 function watchstop(){
     clearInterval(timer);
     bg.classList.remove("animation-bg");
 }

 function watchreset(){
      clearInterval(timer);
     [seconds, minutes, hours]=[0,0,0];
     displaytime.innerHTML = "00:00:00";
     bg.classList.remove("animation-bg");
 }