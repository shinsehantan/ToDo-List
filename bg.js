const body = document.querySelector("body");

function getRandomNumber () {
    // 랜덤넘버를 반환하는 함수
    const NUMBER = Math.floor(Math.random() * 5);
    return NUMBER;
}

function showImage (num) {
    const image = new Image ();
    image.src = `images/${num}.jpg`;
    body.appendChild(image);
}

function init() {
    const x = getRandomNumber();
    showImage(x);
}

init();

// 이미지를 배경에 띄워야 함
// 
