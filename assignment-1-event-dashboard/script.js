const createBtn = document.getElementById("createEvent")
const container = document.getElementById("eventContainer")

const totalEvents = document.getElementById("totalEvents")
const highlightEvents = document.getElementById("highlightEvents")

let total = 0
let highlight = 0

createBtn.addEventListener("click", createEvent)

function createEvent(){

const name=document.getElementById("eventName").value
const date=document.getElementById("eventDate").value
const location=document.getElementById("eventLocation").value

if(name=="" || date=="" || location==""){
alert("Fill all fields")
return
}

const card=document.createElement("div")
card.classList.add("event-card")

card.innerHTML=`
<div class="event-info">
<strong>${name}</strong>
<span>${date}</span>
<span>${location}</span>
</div>

<div class="buttons">
<button class="highlight-btn">Highlight</button>
<button class="delete-btn">Delete</button>
</div>
`

container.appendChild(card)

total++
updateStats()

document.getElementById("eventName").value=""
document.getElementById("eventDate").value=""
document.getElementById("eventLocation").value=""
}


container.addEventListener("click",function(e){

if(e.target.classList.contains("delete-btn")){
e.target.closest(".event-card").remove()
total--
updateStats()
}

if(e.target.classList.contains("highlight-btn")){
const card=e.target.closest(".event-card")

card.classList.toggle("highlight")

if(card.classList.contains("highlight")){
highlight++
}else{
highlight--
}

updateStats()

}

})


function updateStats(){
totalEvents.innerText=total
highlightEvents.innerText=highlight
}