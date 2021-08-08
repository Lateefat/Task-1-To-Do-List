let pencil = document.getElementById("pencil");
let form = document.getElementById("form-element");
let uItems = document.getElementById("uList");
let done = document.getElementsByClassName("list-input");
let btnbg = document.getElementsByClassName("list-btn");
let message = document.getElementById("msg")

// form submit event
pencil.addEventListener("click", addNewItem);
// remove item list event
uItems.addEventListener("click", removeListItem);
// mark item as done
uItems.addEventListener("click", doneGreen);

function addNewItem(e){
    e.preventDefault();
    let newItem = document.getElementById("inputbox").value;
    if(newItem === ""){
        confirm("Please enter an item.");
    }
    if(newItem !== ""){
        // create list element
        let li = document.createElement("li")
        li.className = "list-input";
        li.appendChild(document.createTextNode(newItem));

        // create button
        let btn =document.createElement("button");
        btn.textContent = "X";
        btn.className = "list-btn";

        li.appendChild(btn);
        uItems.appendChild(li);
        form.reset();
    }
}
function removeListItem(e){
    if(e.target.classList.contains("list-btn")){
        if(confirm("Do you want to remove this item?")){
            let ul = e.target.parentElement;
            uItems.removeChild(ul);
        }
        
    }
}

function doneGreen(e){
    if(e.target.classList.contains("list-input")){
        
        for( let i = 0; i < done.length; i++){
            done[i].onclick = function(){

                done[i].style.background = "#51DF70";
                btnbg[i].style.background = "#51DF70";
            }
        }        
    }
}


