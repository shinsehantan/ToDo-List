const body = document.querySelector("body");

// 랜덤 이미지 넣기
// 랜덤 번호 받기

function getRandomNumber() {
    return Math.floor(Math.random() * (4)); 
    //최댓값은 제외, 최솟값은 포함
}

function putImage() {
    //바디(document.body)에 이미지 넣기
    const image = new Image (); 
    const num = getRandomNumber();
    image.src = `images/${num}.jpg`;
    image.classList.add('js-img');
    body.appendChild(image);
}


function init() {
    // 랜덤넘버를 생성하자.
    // 바디에 이미지를 넣자
    putImage ();
}

init();