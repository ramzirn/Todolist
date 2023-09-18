const input = document.getElementById("input")
const list_container = document.getElementById("list-container")
console.log(input)
function addTask(){
    if (input.value == ''){
        alert("You must write something !")
        save()

    
    }
    else {
        let li = document.createElement("li")
        li.innerHTML=input.value
        list_container.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
        save()
        
    }
    input.value= ""
save()
}

list_container.addEventListener("click",function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        save()
    }
    else if (e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        save()

    }
},false )


function save(){
    localStorage.setItem("tasks",list_container.innerHTML)

}
function restore(){
    list_container.innerHTML=localStorage.getItem("tasks")
}

restore()