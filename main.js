let dimensions = 16;
const paintArea = document.querySelector('#paint-area');

let mouseDown = false;
paintArea.onmousedown = () => {
    mouseDown = true;
    console.log(mouseDown);
}
paintArea.onmouseup = () => {
    mouseDown = false;
    console.log(mouseDown);
}

//set predefined colors
const colorButtons = document.querySelectorAll('.pixelcolor');
const colors = [
    { color: "red", value: "rgb(255, 0, 0)" },
    { color: "blue", value: "rgb(0, 0, 255)" },
    { color: "green", value: "rgb(60, 179, 113)" },
    { color: "yellow", value: "rgb(255, 165, 0)" },
    { color: "black", value: "rgb(0, 0, 0)" },
    { color: "white", value: "rgb(255, 255, 255" },
];
let currentColor = colors[4].value;


function assignButtons() {
    for (let color in colorButtons) {
        for (let buttonColor in colors) {
            if (colorButtons[color].id == colors[buttonColor].color) {
                const colorSelected = colors[buttonColor].color;
                colorButtons[color].addEventListener("click", () => {
                    currentColor = colors[buttonColor].color;
                });
                break;
            };
        };
    };
};

assignButtons();





//calculate the paint grid using dimensions variable
function setGrid(dimensions,) {
    const allPixel = dimensions * dimensions;
    const pixelWidth = (`${paintArea.offsetWidth / dimensions}px`);
    for (i = 1; i <= allPixel; i++) {
        const pixel = document.createElement('div');
        pixel.addEventListener('mouseover', () => {
            const paintPixel = pixel;
            paint(pixel);
        });

        pixel.style.width = (pixelWidth);
        pixel.style.height = (pixelWidth);
        pixel.classList.add('pixel');
        paintArea.appendChild(pixel);
    };
};

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let pixel in pixels) {
        pixels.item(pixel).style.background = 'none';
    }
});

function paint(pixelSelection) {
    if (mouseDown) {
        pixelSelection.style.backgroundColor = currentColor;
    };
};

setGrid(dimensions);


