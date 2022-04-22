//Interacting with the web page.

const para = document.querySelector(".test > h1").innerText;

// console.log(para);

const body = document.querySelector("body");
const link = body.querySelector("a");
console.log(link.getAttribute("href"));
console.log(body);