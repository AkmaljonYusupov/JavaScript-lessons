"use strict";

// head
// console.log(document.head);
// body
// console.log(document.body);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// ona elementi
// console.log(document.querySelector('#btn').parentNode);

// console.log(document.querySelector(`[data-current='b']`).nextSibling);
// console.log(document.querySelector(`[data-current='b']`).nextElementSibling);

// #text larni olib tashlash 
for(let node of document.body.childNodes){
    if (node.nodeName=='#text') {
        continue
    }
    console.log(node);
}