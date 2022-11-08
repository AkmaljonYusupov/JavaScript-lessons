"use strict";
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);

// console.log(document.querySelector("#btn").parentNode.parentNode);

// console.log(document.querySelector('[data-current="b"]').nextSibling);
// console.log(document.querySelector('[data-current="b"]').previousSibling);
// console.log(document.querySelector('[data-current="b"]').nextElementSibling);

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
  console.log(node);
}
