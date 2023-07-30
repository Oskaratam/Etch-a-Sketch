/* 
1.Create a layout +
2.Make a grid paintArea +
3.Add ability to paint
4.Add slider to change size of the paintArea
5.Add "clear" button 
6.Add eraser 
7.Add button to switch colors
*/

const paintArea = document.getElementById('paintArea');

let = columnsCount = 20,
      rowsCount = 20;
      paintColor = 'red';

const createGrid = () => {
    for(i = 1; i <= columnsCount; i++){
        let newColumn = document.createElement('div');
        newColumn.classList.add(`column${i}`)
        newColumn.setAttribute('style', `display: flex; width:700px; height:${(700 / columnsCount)}px`);
        paintArea.appendChild(newColumn)
        for (j = 1; j <= rowsCount; j++){
            let newBox = document.createElement('div');
            newBox.classList.add(`box`)
            newBox.setAttribute('style', `border: 1px solid black; width:50px; height:${700 / columnsCount}px`);
            newColumn.appendChild(newBox);     
        } 
    }

}
createGrid()


let MouseDown;
document.querySelectorAll('.box').forEach(box => {
    paintArea.addEventListener('mousedown', () => {MouseDown = 1});
    paintArea.addEventListener('mouseup', () => {MouseDown = 0});
    box.addEventListener('mouseover', () => {if (MouseDown === 1) {
        box.style.backgroundColor = paintColor}
    })
}
)
