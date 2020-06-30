//선언
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//정의
function saveName(text){
    localStorage.setItem(LS_KEY_NAME,text);
}

function handleSubmit(evevt){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForNmae(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName( ){
    const currentUser = localStorage.getItem(USER_LS);
if(currentUser === null) {
    askForNmae();

} else {
    paintGreeting(currentUser);

}}
function init() {}


//호출
init();
loadName();