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



const aTag = document.createElement("d");
// aTag.setAttribute("href", "#");
aTag.innerText = "Click Me!"
aTag.style.padding = "0px 10px";
aTag.style.color = "white";
aTag.style.backgroundColor = "black";
aTag.style.borderRadius = "10px";
aTag.style.display = `flex`;
aTag.style.alignItems = "center";
aTag.style.justifyContent = "center";
aTag.style.fontSize = "1.5rem"
// const txt = document.createElement("p");

// aTag.appendChild(txt);
// console.log(aTag);

section.appendChild(aTag);
