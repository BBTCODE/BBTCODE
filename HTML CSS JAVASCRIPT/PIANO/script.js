 const allkeys = document.querySelectorAll(".piano .key");
 allkeys.forEach((key,i) => {
key.onclick = ()=>{
    let music_url ="music/key"+(i+1)+".mp3";
    console.log(music_url)
    let audio = new Audio(music_url);
    audio.play();
 }   
});