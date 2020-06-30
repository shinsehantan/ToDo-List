//변수
const form = document.querySelector(".js-form");
const greeting = document.querySelector(".js-greetings");
const input = document.querySelector("input");
const SAVED_NAME = "savedUser";
const ADD = "showing";


//함수
function hello(text){
    form.classList.remove(ADD);
    greeting.classList.add(ADD);
    greeting.innerHTML = `Hi there ${text}`;
    // console.log(text);
}

function saveName(name){
    localStorage.setItem(SAVED_NAME, name);
    hello(name);
}

function handleSubmit(event) {
    event.preventDefault();
    const name = input.value;
    // console.log(name);
    saveName(name);
}

function boxOpen() {
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);

}

function checkName() {
    const savedUser = localStorage.getItem(SAVED_NAME);
    if(savedUser === null){
        boxOpen();
    } else{
        hello(savedUser);
    }
}

function init(){}


//호출
checkName();
init ();
