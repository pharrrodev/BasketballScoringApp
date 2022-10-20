
count = 0
let homescoreNum =document.getElementById("home-Count")
let guestscoreNum =document.getElementById("guest-Count")



function homeadd1(){
   count ++
   homescoreNum.innerText = count
}
function homeadd2(){
   count +=2
   homescoreNum.innerText = count
}

function homeadd3(){
   count +=3
   homescoreNum.innerText = count   
}


function guestadd1(){
   count ++
   guestscoreNum.innerText = count
   
}
function guestadd2(){
   count +=2
   guestscoreNum.innerText = count
   
}
function guestadd3(){
   count +=3
   guestscoreNum.innerText = count

}

function resethome(){
   count = 0
   homescoreNum.innerText = 0
}
function resetguest(){
   count = 0
   guestscoreNum.innerText = 0
}