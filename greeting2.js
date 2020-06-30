const form = document.querySelector(".js-form"), 
input = form.querySelector("input"),
h4 = document.querySelector(".js-greetings");

const SHOWING_CN = "showing", USER_LS = "currentUser";
//정의
function greeting(text) {
    h4.classList.add(SHOWING_CN);
    h4.innerHTML = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser === null) {
        //askName();
    } else {
        h4.classList.add(SHOWING_CN);
        h4.innerHTML = `Hello ${currentUser}`;
    }  
};
function init(){};

//호출
init();
loadName();
