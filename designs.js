// Select color input
let colorPicker = document.getElementById('colorPicker');
// Select size input
let sizePicker = document.getElementById('sizePicker');
// Select table
let canvas = document.getElementById('pixelCanvas');
// Table size input
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

// Making grid
function makeGrid(height, width) {
    for (let r = 0; r < height; r++) {
        let row = document.createElement('tr');
        canvas.appendChild(row);
        for (let c = 0; c < width; c++) {
            let column = document.createElement('td');
            row.appendChild(column);
            // Add color to cell
            column.addEventListener('click', function(event) {
                let color = colorPicker.value;
                event.target.style.backgroundColor = color;
            });
        }
    }
}   