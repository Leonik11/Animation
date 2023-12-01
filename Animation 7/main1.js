let isDragging = false;
let lastMouseX;
let lastMouseY;
let currentRotationX = 0;
let currentRotationY = 0;

document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
document.addEventListener("mousemove", onMouseMove);

function onMouseDown(event) {
    isDragging = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    document.body.style.cursor = "grabbing";
}

function onMouseUp(event) {
    isDragging = false;
    document.body.style.cursor = "grab"
}

function onMouseMove(event) {
    if (isDragging){
        let deltaX = event.clientX - lastMouseX;
        let deltaY = event.clientY - lastMouseY;

        lastMouseX = event.clientX;
        lastMouseY = event.clientY;

        currentRotationX += deltaX * 0.5;
        currentRotationY += deltaY * 0.5;

        updateCubeRotation(); 
    }
}

function updateCubeRotation() {
    let cube = document.querySelector(".cube");
    cube.style.transform =
    `rotateX(${currentRotationX}deg) 
    rotateY(${currentRotationY}deg)`;
}