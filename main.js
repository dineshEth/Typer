'use strict';
import { para, paragraphSize } from "./utils/createElement.js";
import { performanceResult, wordsPerMinute } from "./utils/counter.js";

let start = false;

let curr = 0;
export let startTimeStamp;
export let endTimeStamp;
export let mistake = 0;
export let textContainer = document.querySelector('#textContainer');
let performanceBox = document.querySelector('#performance')
let startClick = document.getElementById('start');
let stopClick = document.getElementById('stop');

// start and stop buttons click event
startClick.addEventListener('click',()=>{
    start = true; 
    textContainer.style.filter = `blur(0px)`;
    startClick.setAttribute('disabled','')
    stopClick.removeAttribute('disabled');
});
stopClick.addEventListener('click',()=>{
    start = false;
    textContainer.style.filter = `blur(2px)`;
    stopClick.setAttribute('disabled','')
    startClick.removeAttribute('disabled');
});

para()

window.addEventListener('keypress',(e)=>{
    e.preventDefault();
    if(!start) return;
    let key =  document.querySelectorAll("#character");
    if(curr == paragraphSize-1){
        curr = 0; // new string
        createChild(wordsPerMinute(endTimeStamp - startTimeStamp),performanceResult())
        para();  // updates new writing
        // removing all the childNodes of text  
        key.forEach(k => {
            k.remove();
        });
        mistake = 0;
        return;
    }
    if(key[curr].innerHTML == e.key){
        if(curr == 0) {
            // starttimestamp
            let dd =  new Date();
            startTimeStamp = dd.getTime();
        }
        if(curr == paragraphSize - 2){
            let dd =  new Date();
            endTimeStamp = dd.getTime();
        }
        key[curr].style.opacity = 1;
        curr++;
    }
    else{
        key[curr].style.color = 'red';
        mistake++
    }
});

function createChild(speedValue, Correctness){
    performanceBox.innerHTML = `
    <div class="container">
        <p class="name">Speed</p>
        <span class="value">${speedValue}words/min</span>
    </div>
    <div class="container">
        <p class="name">Correctness</p>
        <span class="value">${Correctness}</span>
    </div>
    `
}

if(window.innerWidth <= 800){
    alert("open in laptop or computer")
}