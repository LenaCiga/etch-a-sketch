const divParent = document.getElementById("container");
const fragmentChildren = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const divChild = document.createElement("div");
    divChild.className = "child-div";
    divChild.textContent = `Div ${i + 1}`;

    fragmentChildren.appendChild(divChild);
}

divParent.appendChild(fragmentChildren);

divParent.addEventListener("mouseover", (e) => {
    if (e.target.matches('.child-div')) { // Better than contains
        e.target.classList.add('hover');
    }
});

// divParent.addEventListener("mouseout", (e) => {
//     if (e.target.matches('.child-div')) {
//         e.target.classList.remove('hover');
//     }
// });  //if i want the regular hover I include this too

const bttn = document.createElement("button");
bttn.textContent = "New canvas size";