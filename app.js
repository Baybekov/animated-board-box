const board = document.querySelector('#board');

const colors = ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8', '#ff0000'];

const squaresNumber = 1000;

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });
   
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(square) {
    const color = randomColor();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
}

function randomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
}
