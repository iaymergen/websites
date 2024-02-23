

//Element Seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;

loadItems();
eventListeners();

function eventListeners() {
    //submit
    form.addEventListener("submit", addNewItem);
    //delete
    taskList.addEventListener("click", deleteItem)
    //delete all
    btnDeleteAll.addEventListener("click", deleteAllItems);

}

function addNewItem(e) {
    if (input.value == '') {
        alert("Plase add new item");
    }
    
    createItem(input.value);
    setItemToLS(input.value);

  
    input.value = "";
    e.preventDefault();
}

function deleteItem(e) {
     
        if (e.target.className == "fas fa-times") {
            if (confirm("Silmek istediğinize emin misiniz?"))
            e.target.parentElement.parentElement.remove();
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    
    e.preventDefault();

}

function deleteItemFromLS(deleteTodo){
    let todos = getItemsFromLS();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteAllItems(e){
    
    if(confirm("Emin misiniz?"))
    {
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    
   //taskList.innerHTML = "";
}

function loadItems(){
    todos = getItemsFromLS();
    todos.forEach(function(item){
        createItem(item);
    })
}

function getItemsFromLS(){
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function setItemToLS(newTodo){
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo){
      //li oluştur
      const li = document.createElement("li")
      li.className = "list-group-item list-group-item-secondary";
      li.appendChild(document.createTextNode(newTodo));
  
      //a oluşturma
      const a = document.createElement("a");
      a.classList = "delete-item float-right";
      a.setAttribute("href", "#");
      a.innerHTML = '<i class="fas fa-times"></i>';
  
      li.appendChild(a);
      taskList.appendChild(li);
}