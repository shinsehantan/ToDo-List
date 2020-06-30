const toDoForm = document.querySelector(".js-toDoForm");
const inputBox = toDoForm.querySelector("input");
const TODOS_UL = document.querySelector(".js-toDoList");
const TODOS_LS = 'todos';

function saveToDos(){

}

function submitHandler(event){
    event.preventDefault();
    const currentValue = inputBox.value;
    saveToDos();
    currentValue="";
}

function paintToDo(text){
    const li = document.createElement("li");
    const Btn = document.createElement("button");
    const span = document.createElement("span");
    Btn.innerText("✔");
    span.innerText('text');
    li.appendChild(Btn);
    li.appendChild(span);
    TODOS_UL.appendChild(li);

}

function loadToDos() {
    //로컬스토리지에 있는지 확인하고, 있으며 불러올 준비를 시키는 애
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(element){
            paintToDo(element.text);
           }
      )
    }
}

function init() {
    loadToDos();
    inputBox.addEventListener("submit",submitHandler);
}

init ();
