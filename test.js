// variables
const form = document.querySelector(".js-form");
const h4 = document.querySelector(".greetings");
const input_tag = document.querySelector("input");
const LOCALSTORAGE_KEY = "currentUser";
const SHOWING_CLS = "showing";

// function definition

function helloMsg(localvalue) {  
    form.classList.remove(SHOWING_CLS);
    h4.classList.add(SHOWING_CLS);
    h4.innerHTML = `Hello ${localvalue}`;
}

function handleSubmit(event) {
    // 이벤트가 안날아가게
    event.preventDefault();
    // 로컬스토리지에 저장
    localStorage.setItem(LOCALSTORAGE_KEY, input_tag.value);
    // 그리팅메세지 띄우기 - 1. input 없애기 2. h4 띄우기
    helloMsg(localStorage.getItem(LOCALSTORAGE_KEY));
}

function yourName() {
    form.classList.add(SHOWING_CLS);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const localuser = localStorage.getItem(LOCALSTORAGE_KEY);
    if(localuser !== null ) {
        // Hello + 로컬벨류 띄우기
        helloMsg(localuser);
    } else {
        // What is your name message!  띄우기
        yourName();
    }
}

function init() {
    loadName();
}


// function call
init();