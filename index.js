//Getting the news for the page

// async  function getNews(){
//     try{
//     const news = await fetch("https://newsapi.org/v2/everything?q=weather&from=2024-06-22&sortBy=popularity&apiKey=cca101db7fdf4a5e844f3f740bd75c3e",{mode:'cors',mehod:"GET"})
//     const newsInfo =await news.json()
//     console.log(newsInfo.articles)
// }
// catch(error){
//     console.log("Can't fetch the data")
// }


// }
// getNews()


//  async function getWeather(){
// try{
//     const weatherData = await fetch("https://api.weatherapi.com/v1/current.json?key=1650213131b14dca81c30209241806&q=iceland&days=7")
//    const weatherInfo =await weatherData.json()
// console.log( weatherInfo)
// }
// catch{
//    console.log("Can't fetch the data")
// }
//   }
//   setTimeout(getWeather(),1000)
//Setting the day
// https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`









const after =document.querySelectorAll(".after")
//Getting the date data and Setting the data

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
let months = ["January","February", "March","April","May","June", "July","August","September","October","November","December"];

const  now = new Date()
let day = now.getDay()
let month=now.getMonth()
let date =now.getDate()

document.querySelector(".dateData").innerHTML=`${date}, ${months[month]}`;
document.querySelector(".dayData").innerHTML = days[day]

after.forEach(element => {
    element.querySelector(".after-day").innerHTML = days[(++day)%7]
    
});

 function blocks(date,temp,emoji){
    this.date=date;
    this.temp=temp;
    this.emoji=emoji;

}

const first_block = new blocks("10-20","20'","☀️")
// console.log(first_block)


// Search for the City using user input

 function getCityName(){
    let city=document.querySelector(".searching")
    let cityName=city.value.trim();
return cityName

 }
 console.log(getCityName())




 async function fetchForecaste(){
    const city =getCityName()
    try{ 
      
       const weatherForecast =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8aa8d76f16200d8c5d2282e6f38cebc3`)
    const forecast =await weatherForecast.json();
    console.log(forecast);
    const country = await forecast.sys
   let tempCel =   await forecast.main.temp-273.15
 return Math.floor(tempCel)
    }
    catch{
       console.log("DIDn't get anything..")
    }
   }
 
 

 async function setTemp() {
   let temp= await fetchForecaste() 
//  
 
  document.querySelector(".main-data > .temp").innerHTML=temp+"°c"

 }
 setTemp()