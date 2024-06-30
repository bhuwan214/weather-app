

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
function getCityName() {
   const input = document.querySelector('.search-box');
   const cityName = input.value.trim();
   return cityName;
}
function buildWeatherUrl(cityName) {
    const apiKey = '8aa8d76f16200d8c5d2282e6f38cebc3'; // Replace 'YOUR_API_KEY' with your actual API key
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
}

// Function to fetch weather data
async function fetchWeatherData(cityName) {
   const url = buildWeatherUrl(cityName);
   try {
      let searchPara = document.querySelector(".search-field > p")
       const response = await fetch(url);
       if (response.ok) {
           const data = await response.json();
           console.log(data)
           displayWeatherData(data);
           displayLocationOnHead(data);
          searchPara.innerHTML= ""

       } else {

       let searchPara = document.querySelector(".search-field > p")
          searchPara.innerHTML= 'Did not get the city'
       }
   } catch (error) {
       console.error('Error fetching the weather data:', error);
   }
}

function displayWeatherData(data) {
const presentTemp = document.querySelector(".main-data > .temp") 
const tempK =data.main.temp
console.log(tempK)
const tempC = Math.floor((tempK - 273.15))
console.log(tempC)
presentTemp.innerHTML=tempC + "°"

}


// Handle Enter key press
function handleEnterKey(event) {
   if (event.key === 'Enter') {
      let searchPara = document.querySelector(".search-field > p")

       const cityName = getCityName();
       if (cityName) {
         searchPara.innerHTML=""
           fetchWeatherData(cityName);

       } else {
         searchPara.innerHTML= 'Please enter a city name'
       }
   }
}


function displayLocationOnHead(data){
let country = data.name;
let city =data.sys.country;


document.querySelector(".location > .city").innerHTML=city;
document.querySelector(".location > .country").innerHTML=country;

}

const searchBoxInput = document.querySelector('.search-box');
searchBoxInput.addEventListener('keydown', handleEnterKey);
 

 