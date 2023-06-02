 const apikey = "c140efbf3d427319c131504e77777f7e";
 const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchbox = document.getElementsByClassName("search input");
 const searchbtn = document.getElementsByClassName("search button");
 const weathericon = document.getElementsByClassName("weather-icon");

 const checkweather = async (city)=>{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
      document.getElementsByClassName("error").style.display = "block";
      document.getElementsByClassName("weather").style.display = "none";

    } else {
     var data = await response.json();

    document.getElementsByClassName("city").innerHTML = data.name;
    document.getElementsByClassName("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementsByClassName("humidity").innerHTML = data.main.humidity + "%";
    document.getElementsByClassName("wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds")
    {
     weathericon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear")
    {
     weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain")
    {
     weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle")
    {
     weathericon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist")
    {
     weathericon.src = "images/mist.png";
    }

    document.getElementsByClassName("weather").style.display = block;
    document.getElementsByClassName("error").style.display = none;

    }
    
    
 }
  searchbtn.addEventListner("click",()=>{
     checkweather(searchbox.value);
  })

 