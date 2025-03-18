document.getElementById("addToList").addEventListener("click", () => {
    addTodo();
})

function addTodo() {
    let input = document.getElementById("todoInput");
    let text = input.value.trim();
    if (text === "") return;
    
    let li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", ()=> {
        li.classList.toggle("completed");
    })
    
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}