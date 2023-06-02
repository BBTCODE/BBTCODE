// initialize variables

let songindex = 0;
let audioelement = new Audio('nsongs/1.mp3');
let progressbar = document.getElementById("progressbar");
let masterplay = document.getElementById("masterplay");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById("mastersongname");
let songItemplay = document.getElementById("songItemplay");
let songs = [
     {songName:"Warriyo - Mortals",filePath:"nsongs/1.mp3",coverPath:"img/covers/1.jpg"},
     {songName:"Cielo - Huma-Huma",filePath:"nsongs/2.mp3",coverPath:"img/covers/2.jpg"},
     {songName:"DEAF KEV - Invincible",filePath:"nongs/3.mp3",coverPath:"img/covers/3.jpg"},
     {songName:"Different Heaven & EH!DE",filePath:"nsongs/4.mp3",coverPath:"img/covers/4.jpg"},
     {songName:"Janji-Heroes-Tonight",filePath:"nsongs/5.mp3",coverPath:"img/covers/5.jpg"},
     {songName:"Heat Waves",filePath:"nsongs/6.mp3",coverPath:"img/covers/6.jpg"},
     {songName:"Bella ciao",filePath:"nsongs/7.mp3",coverPath:"img/covers/7.jpg"},
     {songName:"One Love",filePath:"nsongs/8.mp3",coverPath:"img/covers/8.jpg"},
]

//   change cover img

songItem.forEach((element, i)=>{ 
     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//   handle play pause click

masterplay.addEventListener('click',()=>{
    
    if (audioelement.paused || audioelement.currentTime<=0) {
     audioelement.play();
     masterplay.classList.remove("fa-circle-play");
     masterplay.classList.add("fa-circle-pause");
     gif.style.opacity = 1; 
     // Array.from(document.getElementsByClassName("songItemplay")).foreach (element => {
     // element.target.classList.remove("fa-circle-play");
     // element.target.classList.add("fa-circle-pause");
     
     // })
    } 
    else{
     audioelement.pause();
     masterplay.classList.remove("fa-circle-pause");
     masterplay.classList.add("fa-circle-play");
     gif.style.opacity = 0;
     Array.from(document.getElementsByClassName("songItemplay")).forEach(element => {
     element.classList.remove("fa-circle-pause");
     element.classList.add("fa-circle-play");
     
     })
}
    
})


// handle audioelement

audioelement.addEventListener("timeupdate",()=>{
     progress = parseInt((audioelement.currentTime / audioelement.duration)*100);
     progressbar.value = progress;  
})

// handle progressbar

progressbar.addEventListener("change", ()=>{
     audioelement.currentTime = progressbar.value * audioelement.duration/100;
})


// handle play click of every songs

const makeallplays = ()=>{

 Array.from(document.getElementsByClassName("songItemplay")).forEach(element => {
          element.classList.remove("fa-circle-pause");
          element.classList.add("fa-circle-play");
     })
}

 Array.from(document.getElementsByClassName("songItemplay")).forEach(element => {
     element.addEventListener("click",(e)=>{
          makeallplays();
          songindex = parseInt(e.target.id);
          if (audioelement.paused || audioelement.currentTime<=0)
              {
                e.target.classList.remove("fa-circle-play");
                e.target.classList.add("fa-circle-pause");
                 audioelement.src = `nsongs/${songindex+1}.mp3`;
                mastersongname.innerText = songs[songindex].songName;
                audioelement.play();
                gif.style.opacity = 1;
                masterplay.classList.remove("fa-circle-play");
                masterplay.classList.add("fa-circle-pause");
              }    
          else{
                audioelement.pause();
                e.target.classList.remove("fa-circle-pause");
                e.target.classList.add("fa-circle-play");
                masterplay.classList.remove("fa-circle-pause");
                masterplay.classList.add("fa-circle-play");
                gif.style.opacity = 0;
              }
          
     })
 })

 // handle previous and next click

 // preivous click

 document.getElementById("preivous").addEventListener("click",()=>{
     if (songindex<=0) {
          songindex = 0;
     }
     else{
          songindex -= 1;
     }
     audioelement.src = `nsongs/${songindex+1}.mp3`;
     mastersongname.innerText = songs[songindex].songName;
     audioelement.play();
     audioelement.currentTime = 0;
     masterplay.classList.remove("fa-circle-play");
     masterplay.classList.add("fa-circle-pause");
 })

 // next click

 document.getElementById("next").addEventListener("click",()=>{
     if (songindex>=7) {
          songindex = 0;
     }
     else{
          songindex += 1;
     }
     audioelement.src = `nsongs/${songindex+1}.mp3`;
     mastersongname.innerText = songs[songindex].songName;
     audioelement.play();
     audioelement.currentTime = 0;
     masterplay.classList.remove("fa-circle-play");
     masterplay.classList.add("fa-circle-pause");
})


//  if ( Math.floor(progressbar.value) = 100) {
//      audioelement.src = `nsongs/${songindex+1}.mp3`;
//      mastersongname.innerText = songs[songindex].songName;
//      audioelement.play()
    
//  }
     



