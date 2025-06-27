var istatus = document.querySelector(".friends")
var addfriend = document.querySelector(".han")
addfriend.addEventListener("click", function(){
    istatus.innerHTML = "matched"
    istatus.style.color = "green" 
    
})
var istatus = document.querySelector(".friends")
var addfriend = document.querySelector(".nah")
addfriend.addEventListener("click", function(){
    istatus.innerHTML = "does not matched"
    istatus.style.color = "red" 
    
})