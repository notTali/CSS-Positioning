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
h1.style.color = "red";
h1.style.fontSize = "3rem";
section.append(h1);