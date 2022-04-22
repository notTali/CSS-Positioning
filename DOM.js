//Interacting with the web page.

// const para = document.querySelector(".test > h1").innerText;

// console.log(para);

// const body = document.querySelector("body");
// const link = body.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(body);

const section = document.querySelector(".test");
// console.log(section);

const h1 = document.createElement("h1");
h1.innerText = "Inner text updated!";
h1.style.background = "plum";
h1.style.padding = "5px 0px 5px 20px"
section.append(h1);