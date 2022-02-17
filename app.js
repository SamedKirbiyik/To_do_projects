let inputDiv = document.querySelector(".inputDiv");
let input = document.getElementById("input");
let button = document.getElementById("button");
let contentDiv = document.querySelector(".contentDiv");


count = 0;
button.addEventListener("click", toDoAdd);
input.addEventListener("keyup", (e)=>{
    if(e.keyCode ==13){
        toDoAdd();
    }
})

function toDoAdd(){

    if(input.value != ""){
        count += 1
        let toDoSpan = document.createElement("span");
        let deleteButton = document.createElement("div");
        let doneButton = document.createElement("div");

        toDoSpan.classList.add("toDoSpan");
        
        doneButton.classList.add("doneButton");
        deleteButton.classList.add("deleteButton");
        
        doneButton.innerText = "Done"
        deleteButton.innerText = "Deleted";
        toDoSpan.innerText = `${count }  -) ${input.value}`;
        
        contentDiv.appendChild(toDoSpan);
        toDoSpan.appendChild(doneButton);
        toDoSpan.appendChild(deleteButton);
        input.value = "";
        
        deleteButton.addEventListener("click",()=>{
            count--;
            contentDiv.removeChild(toDoSpan);
            
        })
        doneButton.addEventListener("click",()=>{
            toDoSpan.style.textDecoration = "line-through"
        })
    }
    else{
        alert("Please enter to do")
    }
}
