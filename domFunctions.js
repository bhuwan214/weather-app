const after =document.querySelectorAll(".after")



after.forEach(element => {
    element.style.backgroundColor="red"
});

 function blocks(date,temp,emoji){
    this.date=date;
    this.temp=temp;
    this.emoji=emoji;

}

const first_block = new blocks("10-20","20'","☀️")

console.log(first_block)