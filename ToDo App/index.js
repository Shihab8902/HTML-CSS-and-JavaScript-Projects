//Find elements
const formElement = document.querySelector("#formElement");
const inputField = document.querySelector("#toDoInput");
const toDoLists = document.querySelector("#toDoLists");
const popUpMessageDisplay = document.querySelector("#popUpMessage");
//Delete to Do
const deleteToDo = (event)=>{
   let selectedToDo = event.target.parentElement.parentElement.parentElement;
   showPopUpMessage("ToDo is Deleted", "danger");
   toDoLists.removeChild(selectedToDo);
   let storedToDos = getStoredToDosFromLocalStorage();
   storedToDos = storedToDos.filter((remainingToDos)=>remainingToDos.toDoId !== selectedToDo.id);
   localStorage.setItem("myToDos", JSON.stringify(storedToDos));
}
//Show Pop Up Message
const showPopUpMessage = (message, status)=>{
   popUpMessageDisplay.classList.add(`bg-${status}`);
    popUpMessageDisplay.innerHTML = message;
    setInterval(()=>{
      popUpMessageDisplay.innerHTML = '';
      popUpMessageDisplay.classList.remove(`bg-${status}`);
    }, 1000);
}

//Get stored todo from local storage
const getStoredToDosFromLocalStorage = ()=>{
   return localStorage.getItem("myToDos") ? JSON.parse(localStorage.getItem("myToDos")) : [];
}
//Create ToDo
const createToDo = (userInput, toDoId)=>{
   let toDolist = document.createElement("li");
   toDolist.id = toDoId;
   toDolist.classList.add("listStyle");
   toDolist.innerHTML = `
   <span>${userInput}</span> <span><button id="deleteButton"><i class="fa-solid fa-trash"></i></button></span>
   `
   toDoLists.appendChild(toDolist);
   let deleteButton = toDolist.querySelector("#deleteButton");
   deleteButton.addEventListener("click", deleteToDo);
}
//getUserInput
const getUserInput = (event)=>{
   event.preventDefault();
   let userInput = inputField.value;
   inputField.textContent = '';
   //Generate unique  id for list items
   let toDoId = Date.now().toString();
   createToDo(userInput, toDoId);
    showPopUpMessage("ToDo is added", "success");
    //Add todos in local storage
    const storedToDos = getStoredToDosFromLocalStorage();
    storedToDos.push({userInput, toDoId});
    localStorage.setItem("myToDos", JSON.stringify(storedToDos));
        inputField.value = '';
}
//Load to do
const loadToDos = ()=>{
   const todos = getStoredToDosFromLocalStorage();
   todos.map((todo)=>createToDo(todo.userInput, todo.toDoId));
}
//Add event listeners
formElement.addEventListener("submit", getUserInput);
window.addEventListener("DOMContentLoaded", loadToDos);