
function expandBox(boxId) {
    const box = document.getElementById(boxId);
    box.classList.toggle("expanded");
}


function changeColor(boxId, color) {
    const box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}


function changeSize(boxId, size) {
    const box = document.getElementById(boxId);
    switch (size) {
        case "small":
            box.style.width = "200px";
            box.style.height = "150px";
            break;
        case "medium":
            box.style.width = "250px";
            box.style.height = "150px";
            break;
        case "large":
            box.style.width = "300px";
            box.style.height = "200px";
            break;
    }
}
