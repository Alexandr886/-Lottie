//--------------------------------- Анимация идущий человек ---------------------------------
let animationWalkingMan = lottie.loadAnimation({
    container: document.getElementById('walking-man'),
    render: 'svg',
    loop: true,
    path: 'images/lottie/walking_man.json'
})


//--------------------------------- Анимация лимон с кнопками управления ---------------------------------
let animationLemon = lottie.loadAnimation({
    autoplay: false,
    container: document.getElementById('lemon'),
    render: 'svg',
    loop: true,
    path: 'images/lottie/lemon.json'
})

const btnPlayLemon = document.getElementById('lemon-play');
const btnStopLemon = document.getElementById('lemon-stop');

let playLemon = false;

btnPlayLemon.onclick = () => {
    if (!playLemon) {
        animationLemon.play();
        btnPlayLemon.textContent = 'Pause';
    }
    else {
        animationLemon.pause();
        btnPlayLemon.textContent = 'Play';
    }
    playLemon = !playLemon;
}

btnStopLemon.onclick = () => {
    animationLemon.stop();
}


//--------------------------------- Анимация по ховеру Loading ---------------------------------
const loadingAnim = document.getElementById('loading');

let animationLoading = lottie.loadAnimation({
    autoplay: false,
    container: loadingAnim,
    render: 'svg',
    loop: false,
    path: 'images/lottie/loading.json'
})

let directionAnim = 1;
//при наведении мыши
loadingAnim.addEventListener('mouseenter', () => {
    animationLoading.setDirection(directionAnim);
    animationLoading.play();
});

//при отведении мыши
loadingAnim.addEventListener('mouseleave', () => {
    animationLoading.setDirection(-directionAnim);
    animationLoading.play();
});


//--------------------------------- Анимация по клику Верблюд ---------------------------------
const camelAnim = document.getElementById('camel');

let animationCamel = lottie.loadAnimation({
    autoplay: false,
    container: camelAnim,
    render: 'svg',
    loop: true,
    path: 'images/lottie/camel.json'
})

let camelPlay = false;

camelAnim.onclick = () => {
    if (!camelPlay) animationCamel.play();
    else animationCamel.pause();
    camelPlay = !camelPlay;
}

const btnCamelFaster = document.getElementById('camel-faster');
const btnCamelSlower = document.getElementById('camel-slower');
let camelSpeedText = document.getElementById('camel-speed-text')

let camelSpeed = 1;

btnCamelFaster.onclick = () => {
    if (camelPlay && camelSpeed < 4) {
        camelSpeedText.textContent = ''
        camelSpeed = camelSpeed + 0.5;
        animationCamel.setSpeed(camelSpeed);
    }
    else if (camelSpeed >= 4) camelSpeedText.textContent = 'Я не могу быстрее!!!';
    else camelSpeedText.textContent = 'Анимация не запущена';
}

btnCamelSlower.onclick = () => {
    if (camelPlay && camelSpeed > 0) {
        camelSpeedText.textContent = ''
        camelSpeed = camelSpeed - 0.5;
        animationCamel.setSpeed(camelSpeed);
    } else if (camelSpeed == 0) camelSpeedText.textContent = 'Я и так стою на месте...';
    else camelSpeedText.textContent = 'Анимация не запущена';
}
