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