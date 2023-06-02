setInterval(() => {
     let time = new Date();
     let hour = time.getHours();
     let minute = time.getMinutes();
     let second = time.getSeconds();
     hrotation = 30*hour + minute/2;
     mrotation = 6 * minute;
     srotation = 6 * second;
     let h = document.getElementById("hour");
     let m = document.getElementById("minute");
     let s = document.getElementById("second");
     h.style.transform = `rotate(${hrotation}deg)`
     m.style.transform = `rotate(${mrotation}deg)`
     s.style.transform = `rotate(${srotation}deg)`
}, 1000);