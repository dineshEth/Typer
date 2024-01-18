import { text } from "./text.js";
import { randomIndex } from "./createElement.js";


export function countWords(index) {
    let counter = 1;
    let string = text[index];
    for(let s of string){
        if(s == " "){
            counter++;
        }
    }
    return counter;
}

export function wordsPerMinute (time){
    let words = countWords(randomIndex)
    console.log("words",words)
    let intoMinutes = Number(time/1000)/60;
    let speed = Math.floor(words/intoMinutes);
    return speed;
}

export function performanceResult(){
    let characters = text[randomIndex].length;
    let wrongCharacters = mistake;
    let performance = (Number(characters - wrongCharacters)/characters) *100;  // percentage ratio
    return performance;  
}
