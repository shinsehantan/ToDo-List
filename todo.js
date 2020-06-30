const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function DelBtn(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const Remain = toDos.filter(
        function(x) { 
            return x.id !== parseInt(li.id);
        });
    toDos = Remain;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // 화면에 그리는것 (로컬스토리지에서 todos들을 HTMl li로 만들어서 ul에 삽입하는것)
    // 매개변수로 할일들을 받는다.
    const li = document.createElement("li");
    const Delete = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    Delete.innerText = "🧞‍♂"
    Delete.addEventListener("click", DelBtn);
    span.innerText = text;
    li.appendChild(Delete);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    // 로컬로부터 가져온 todos value들을 그리도록 유도하는 함수.
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach( function(toDo) {
            paintToDo(toDo.text);
            }
        )
    }
}

function init() {
    // 초기화 함수 : 1. 로컬에 있는 할일있으면 그리기 2. 폼에 입력 받게 이벤트 추가하기  
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
