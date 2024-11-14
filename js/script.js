// Function to expand/collapse the box
function expandBox(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle("expanded");
}

// Function to change box color based on user selection
function changeColor(boxId, color) {
    const box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}

// Function to change box size based on user selection
function changeSize(boxId, size) {
    const box = document.getElementById(boxId);
    switch (size) {
        case "small":
            box.style.width = "150px";
            box.style.height = "100px";
            break;
        case "medium":
            box.style.width = "200px";
            box.style.height = "150px";
            break;
        case "large":
            box.style.width = "250px";
            box.style.height = "200px";
            break;
    }
}
