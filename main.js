const dimensions = 16;
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
const red = 'rgb(255, 0, 0)';
const blue = 'rgb(0, 0, 255)';
const green = 'rgb(60, 179, 113)';
const yellow = 'rgb(255, 165, 0)';
const black = 'rgb(0, 0, 0)';
const white = 'rgb(255, 255, 255';





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
        let thisPixel = pixels[pixel];
        //thisPixel.style.backgroundColor = 'none';
    }
});

let currentColor = black;


function paint(pixelSelection) {
    if (mouseDown) {
        pixelSelection.style.backgroundColor = currentColor;
    };
};

setGrid(dimensions);


