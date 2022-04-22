const parent = document.querySelector(".parent");

const child1 = document.querySelector(".child-1");
const child2 = document.querySelector(".child-2");
const child3 = document.querySelector(".child-3");

child1.addEventListener("click", e => {
    console.log(e.target);
} );
