const divParent = document.getElementById("container");
const fragmentChildren = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    const divChild = document.createElement("div");
    divChild.className = "child-div";
    divChild.textContent = `Div ${i + 1}`;

    fragmentChildren.appendChild(divChild);
}

divParent.appendChild(fragmentChildren);