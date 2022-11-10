
//QuerySelectors

let type = document.querySelector("#input")
let addButton = document.querySelector("#add")
let remove = document.querySelector("#remove")
let removeAll = document.querySelector("#remove-all")
let list = document.querySelector("#list")
let listItems = document.createElement("ol")
let editButton = document.querySelector("#edit")

//EventListeners

addButton.addEventListener("click",function(event){
    event.preventDefault()
    let li = document.createElement("li") 
    console.log(li)
    li.innerText = type.value
    list.appendChild(li)
    
    li.addEventListener("click", function(){
        
        if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = ""
        li.classList.remove("itemCompleted")
        } else if(li.style.textDecoration === ""){
            li.style.textDecoration = "line-through"
            li.classList.add("itemCompleted")
        }
    })
    type.value = ""
    
})


console.log(listItems)

remove.addEventListener("click", function(event){
    event.preventDefault();
    let itemCompleted = document.querySelectorAll(".itemCompleted")

    itemCompleted.forEach(item => {item.remove()})
     console.log("Button works")        
})


removeAll.addEventListener("click", function(event){
    event.preventDefault();
   
    let removeAllItems = document.querySelectorAll("li")
    removeAllItems.forEach(item => {item.remove()})
    console.log("remove button works")
})


editButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Edit button clicked!")
    if(editButton.innertext === "click"){
    li.innerText.appendChild("type.value")
    }
})





