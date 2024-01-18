import { text } from "./text.js";
import { textContainer } from "../main.js";


export function createElement(ch){
    let elem = document.createElement('span');
    elem.className = 'character';
    elem.id = 'character';
    elem.innerHTML = ch;
    textContainer.appendChild(elem);
}

export let paragraphSize ;
export let randomIndex;

export function para (){
    randomIndex = Math.floor(Math.random()*50);
    let string = text[randomIndex];
    paragraphSize =  string.length;
    for(let s of string) {
        createElement(s);
    }
}
