let datepicker = document.getElementById("picker");
let choosedate = document.getElementById("choosedate");

let ageyear = document.getElementById("ageyear") ;
let agemonth = document.getElementById("agemonth") ;
let ageday= document.getElementById("ageday") ;
let agehour = document.getElementById("agehour") ;
let agesecond = document.getElementById("agesecond") ;
let agemilisecond = document.getElementById("agemilisecond"); 

datepicker.addEventListener('change',(e)=>{
let Option = { year:"numeric", month:"long",day:"numeric"};
     let selecteddate = new Date(e.target.value);
     let DOB = selecteddate.toLocaleString('en-us',Option);

     choosedate.innerHTML = "DOB  : "  +  DOB ;

     let milisecondofDOB = Date.parse(DOB);
     let milisecondofnow = Date.now();
     let age_in_milisecond = milisecondofnow - milisecondofDOB ;
     let milisecond = Math.round(age_in_milisecond);
     let second = Math.round(milisecond / 1000);
     let minute = Math.round(second / 60);
     let hour = Math.round(minute / 60);
     let day = Math.floor (hour / 24);
     let month = Math.floor(day/30) ;
     let year = Math.floor(month/12);


     ageyear.innerHTML = year
     agemonth.innerHTML = month
     ageday.innerHTML = day
     agehour.innerHTML  = hour
     agesecond.innerHTML = second
     agemilisecond.innerHTML = second

     document.querySelector(".age-calc").classList.add("expand");

})