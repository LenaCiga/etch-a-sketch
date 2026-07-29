const divParent = document.getElementById("container");

function createDivs(count) {
    const fragmentChildren = document.createDocumentFragment();
    const grid = count * count;
    const flexBasis = 100 / count;
    
    for (let i = 0; i < grid; i++) {
        const divChild = document.createElement("div");
        divChild.className = "child-div";
        // divChild.textContent = `Div ${i + 1}`;
        divChild.style.flex = `0 0 ${flexBasis}%`;
        
        fragmentChildren.appendChild(divChild);
    }
    
    divParent.appendChild(fragmentChildren);
}

createDivs(16);

// Only this is needed for the task
// divParent.addEventListener("mouseover", (e) => {
//     if (e.target.matches('.child-div')) { //
//         e.target.classList.add('hover');
//     }
// });

// Trying this > while you're clicking, you're drawing, more like a regular MS Paint behavior:

// Bonus task 1 - Random color:
function randomColor(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

let isDrawing = false;

divParent.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDrawing = true;
    if (e.target.matches('.child-div')) { // this check for matching is so it only bubbles on child divs not all the way past them, i get a mess if this is gone
        // e.target.classList.add('hover');
        randomColor(e.target);
    }
});

divParent.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        if (e.target.matches('.child-div')) {
            // e.target.classList.add('hover');
            randomColor(e.target);
        }
    }
});

divParent.addEventListener("mouseup", (e) => {
    isDrawing = false;
    // if (e.target.matches('.child-div')) { // Better than contains
        // e.target.classList.remove('hover'); //I don't need to remove the class
    // }
});

const bttn = document.createElement("button");
bttn.className = "clear-button";
bttn.textContent = "New canvas size";
document.body.appendChild(bttn);
// button for creating new grid canvas which removes the previous 16x16 one

bttn.addEventListener("click", () => {
    const input = prompt("Enter a number N that will create N x N grid for drawing");

    if (input !== null) {
        const count = parseInt(input);

        if (!isNaN(count) && count > 0 && count < 100) {
            divParent.innerHTML = "";
            createDivs(count);
        }
        else {
            alert("Please enter valid numbers from 1 to 100");
        }
    }
});