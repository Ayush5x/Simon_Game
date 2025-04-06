const start_audio = new Audio('mouseclick1.mp3');
const leve_up_aud = new Audio('level_up sound.mp3');
const game_over_aud = new Audio('game_over.mp3');


let game_sequence = [];
let user_sequence = [];

let btns = ["orange", "hot_pink", "dark_cyan", "blue"];

let started = false;

let level = 0;

let game_level = document.querySelector('h2')

let st_btn = document.querySelector('#st_btn');
st_btn.addEventListener('click', () => {
    if (started == false) {

        started = true;  // it help to start the game once

        levelup();

    }
})

function gameFlash(btn) {
    btn.classList.add('flash')
    setTimeout(function () {
        btn.classList.remove('flash')
    }, 200)
}

function userFlash(btn) {
    btn.classList.add('userflash')
    setTimeout(function () {
        btn.classList.remove('userflash')
    }, 200)

}

function levelup() {
    user_sequence = [];
    level++;

    game_level.innerText = `Level - ${level}` // it shows the game level in the web page



    let rand_index = Math.floor(Math.random() * 3)
    let rand_ind = btns[rand_index];
    game_sequence.push(rand_ind);

    let randbtn = document.querySelector(`.${rand_ind}`) // it store the button in the user sequrnce array which will be use in later to compare the two array
    gameFlash(randbtn) // here we calling the gameflash function which is ude to flassh the the button by the game randomly
    leve_up_aud.play();

}

function btnpress() {
    let btn = this; // here this refers to the clicked button
    userFlash(btn)
    let user_color = btn.getAttribute('id') // here in the user_color variable the id of the clicked button is stored in te very next step we push the value in the user_sequence array
    user_sequence.push(user_color)
    start_audio.play();
checkAns(user_sequence.length-1)

}

function checkAns(idx) {
    if (user_sequence[idx] === game_sequence[idx]) {
        if (user_sequence.length == game_sequence.length) {
            setTimeout(levelup, 1000)
        }
    }
    else {
        game_level.innerHTML = `Game Over ! Your Score was <b>${level} </b> <br> press syart to play again`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor ='rgba(226,217,204,0.751)';
        }, 200)
        game_over_aud.play();
        reset()
    }
}

let allbtns = document.querySelectorAll('.btn');
for (let btn of allbtns) {


    btn.addEventListener("click", btnpress)
}
function reset() {
    started = false;
    game_sequence = []
    user_sequence = [];
    level = 0;
}




const trigger = document.querySelector('#trigger')
const modelwraper = document.querySelector('.model_wraper')


trigger.addEventListener('click',()=>{

modelwraper.classList.add('active')


})

const cls = document.querySelector('#close');

cls.addEventListener('click',()=>{
    modelwraper.classList.remove('active')
})

modelwraper.addEventListener('click',()=>{

    
    modelwraper.classList.remove('active')
})