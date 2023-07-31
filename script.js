/* 
1.Create a layout +
2.Make a grid paintArea +
3.Add ability to paint +
4.Add slider to change size of the paintArea
5.Add "clear" button 
6.Add eraser 
7.Add button to switch colors
*/

const body = document.querySelector('body'),
      paintArea = document.getElementById('paintArea'),
      sliderSize = document.getElementById('sliderSize'),
      currentSize = document.getElementById('currentSize');

let = columnsCount = 16,
      rowsCount = 16;
      paintColor = 'yellow';

const createGrid = () => {
    for(i = 1; i <= columnsCount; i++){
        let newColumn = document.createElement('div');
        newColumn.classList.add(`column${i}`)
        newColumn.setAttribute('style', `display: flex; width:700px; height:${(700 / columnsCount)}px`);
        paintArea.appendChild(newColumn)
        for (j = 1; j <= rowsCount; j++){
            let newBox = document.createElement('div');
            newBox.classList.add(`box`)
            newBox.setAttribute('style', `border: 1px solid black; width:100px; height:${700 / columnsCount}px`);
            newColumn.appendChild(newBox);     
        } 
    }
    let MouseDown;
    body.addEventListener('mousedown', () => {MouseDown = 1});
    body.addEventListener('mouseup', () => {MouseDown = 0});
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseover', () => {if (MouseDown === 1) {
            box.style.backgroundColor = paintColor}
        })
        box.addEventListener('click', () => {box.style.backgroundColor = paintColor})
    }
    )
}
createGrid()

//Sizing with slider
sliderSize.addEventListener('input', () => {
    columnsCount = sliderSize.value;
    rowsCount = sliderSize.value;
    paintArea.innerHTML = null; 
    createGrid();
    currentSize.innerHTML = `${rowsCount}x${columnsCount}`;
})





