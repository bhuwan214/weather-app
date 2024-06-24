const after =document.querySelectorAll(".after")



after.forEach(element => {
    // element.style.backgroundColor="red"
});

function presentdata(say,time,temp,feel,humidity,windspeed){}


 function blocks(date,temp,emoji){
    this.date=date;
    this.temp=temp;
    this.emoji=emoji;

}

const first_block = new blocks("10-20","20'","☀️")
// console.log(first_block)

//Getting the date data and Setting the data

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
let months = ["January","February", "March","April","May","June", "July","August","September","October","November","December"];

const  now = new Date()
let day = now.getDay()
let month=now.getMonth()
let date =now.getDate()

document.querySelector(".dateData").innerHTML=`${date}, ${months[month]}`;
document.querySelector(".dayData").innerHTML = days[day]



