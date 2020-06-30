const TODO_UL = document.querySelector(".js-toDoList");
const toDoForm = document.querySelector(".js-toDoForm");
const toDoFormInput = toDoForm.querySelector("input");

let toDosArr = [];

function DelEvent(event) {
    const button = event.target;
    const li = button.parentNode;
    TODO_UL.removeChild(li);
    const remainTodos = toDosArr.filter(function(x) {
        console.log(x.id , parseInt(li.id));
        return (x.id !== parseInt(li.id))
    })
    toDosArr = remainTodos;
    saveToDos();

}

function saveToDos() {
    localStorage.setItem("toDos",JSON.stringify(toDosArr))
}

function submitHandler(event){
    // 입력된걸 제출하는
    // console.log(event);
    event.preventDefault();
    const currentValue = toDoFormInput.value;
    // console.log(currentValue);
    paintToDo(currentValue);
    toDoFormInput.value = "";
}

function paintToDo(text){
    const li = document.createElement("li");
    const Del = document.createElement("button");
    const span = document.createElement("span");
    Del.innerText="❌";
    Del.addEventListener("click",DelEvent);
    span.innerText=text;
    TODO_UL.appendChild(li);
    li.appendChild(Del);
    li.appendChild(span);
    const newID = toDosArr.length+1;
    li.id = newID;
    console.log(newID);
    const newObj = {
        text : text,
        id : newID
    }

    toDosArr.push(newObj);
    saveToDos();
}

function loadToDos() {
    const toDos = localStorage.getItem('toDos');
    
    // 있으면 띄우려고
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(x) {
            paintToDo(x.text)
        })

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",submitHandler);

}
init ();



// ForEach : 배열의 각각 원소에 대하여 접근하는 기능

// const parsed = [ {name : "yj", age : 24} , {name : "sehee", age : 30}, {name : "minhi", age : 35} ];

// parsed.forEach(function (x){
//     if (x.age >= 30) {
//         console.log(x.name)
//     }
// } );