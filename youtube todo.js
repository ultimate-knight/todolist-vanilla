// // Retrieve todo from local storage or use an empty array
// let todo = JSON.parse(localStorage.getItem('todo')) || [];
// const todoInput = document.getElementById('todoInput');
// const todoList = document.getElementById('todoList');
// const todoCount = document.getElementById('todoCount');
// const addButton = document.querySelector('.btn');
// const deleteButton = document.getElementById('delete-button');

// // Initialize
// document.addEventListener('DOMContentLoaded', function() {
//     addButton.addEventListener('click', addTask);
//     todoInput.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             addTask();
//         }
//     });
//     deleteButton.addEventListener('click', deleteAllTasks);
//     displayTasks();
// });

// function addTask() {
//     const newTask = todoInput.value.trim();
//     if (newTask !== "") {
//         todo.push({
//             text: newTask,
//             disabled: false,
//         });
//         saveToLocalStorage();
//         todoInput.value = '';
//         displayTasks();
//     }
// }

// function saveToLocalStorage() {
//     localStorage.setItem('todo', JSON.stringify(todo));
// }


// function displayTasks() {
//     todoList.innerHTML = "";
//     todo.forEach((item, index) => {
//         const p = document.createElement("p");
//         p.innerHTML = `
//             <div class="todo-container">
//                 <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked" : ""}>
//                 <p id="todo-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editTask(${index})">${item.text}</p>
//             </div>
//         `;
//         p.querySelector(".todo-checkbox").addEventListener("change", () => toggleTask(index));
//         todoList.appendChild(p);
//     });
//     todoCount.textContent=todo.length;
// }



// function toggleTask(index) {
//     todo[index].disabled = !todo[index].disabled;
//     saveToLocalStorage();
//     displayTasks();
// }

// function deleteAllTasks() {
//     todo = [];
//     saveToLocalStorage();
//     displayTasks();
// }

// function updateTodoCount() {
//     const count = todo.length;
//     todoCount.querySelector('span').textContent = count;
// }

// function editTask(index){
//     const todoItem=document.getElementById(`todo-${index}`)
//     const existingText=todo[index].text;
//     const inputElement=document.createElement("input");
//     inputElement.value=existingText;
//     todoItem.replaceWith(inputElement);
//     inputElement.focus();

//     inputElement.addEventListener('blur', function(){
//         const updatedText=inputElement.value.trim();
//         if(updatedText){
//             todo[index].text=updatedText;
//             saveToLocalStorage();
//         }
//         displayTasks();
//     });


// }




let todo=JSON.parse(localStorage.getItem('todo')) || [];
const todoInput=document.getElementById('todoInput');
const todolist=document.getElementById('todoList');
const todoCount=document.getElementById('todoCount');
const deletebutton=document.getElementById('delete-button');
const addButton=document.querySelector('.btn');



//initialization//
document.addEventListener('DOMContentLoaded', function(){
    addButton.addEventListener('click', addtask);
    todoInput.addEventListener('keydown', function(event){
        if(event.key==="Enter"){
            event.preventDefault();
            addtask();
        }
    });
    deletebutton.addEventListener('click', deletealltask);
    displaytext();
});



function addtask(){
    const newTask=todoInput.value.trim();
    if(newTask!==''){
        todo.push({
            text: newTask,
            disabled: false,
        });
    }
    savetolocalstorage()
    todoInput.value='';
    displaytext();


}


function deletealltask(){
    todo=[];
    savetolocalstorage();
    displaytext();

}



function displaytext() {
    todolist.innerHTML="";
    todo.forEach((item, index) => {
        const p=document.createElement('p');
        p.innerHTML=`
        <div class="todo-container">
        <input type='checkbox' class='todo-checkbox' id="input-${index}" ${item.disabled} ? "checked" : ""}>
        <p id="todo-${index}" class="${item.disabled ? "disabled":""}" onclick="editTask(${index})">${item.text}</p>
        
        </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener('change', ()=>toggletask(index));
        todolist.appendChild(p)
        
    });
    todoCount.textContent=todo.length;
}











function toggleTask(index){
    todo[index].disabled=!todo[index].disabled;
    savetolocalstorage();
    displaytext();
}




function edittask(index){
    const item=document.getElementById(`todo-${index}`)
    const existingelement=todo[index].text;
    const inputelement=document.createElement('input')
    inputelement.value=existingelement;
    item.replaceWith(inputelement);
    inputelement.focus()

    inputelement.addEventListener('blur', function(){
        const updatedtext=inputelement.value.trim();
        if(updatedtext){
            todod[index].text=updatedtext;
            savetolocalstorage()
        }
        displaytext();
    })

}





function updateTodoCount(){
    const count=todo.length;
    todoCount.querySelector('span').textContent=count;
}






function savetolocalstorage(){
    localStorage.setItem('todo', JSON.stringify(todo))
}