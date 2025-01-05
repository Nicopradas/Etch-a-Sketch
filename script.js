const container = document.querySelector('.container');
const sizeGridButton = document.querySelector('#gridSize');
const body = document.querySelector('body');
// 16*16 GRID:
for (i=1;i<=16;i++){
    const horizontalSquare = document.createElement('div');
    container.appendChild(horizontalSquare);
    for (f=1;f<=16;f++){
        const verticalSquare = document.createElement('div');
        verticalSquare.textContent='';
        verticalSquare.style.height='25px';
        verticalSquare.style.width='25px';
        verticalSquare.style.border='0.5px solid black';

        verticalSquare.addEventListener('mouseover',() =>{
            verticalSquare.style.backgroundColor='green';
        })
            horizontalSquare.appendChild(verticalSquare);
    }
    
}
sizeGridButton.addEventListener('click', () => {
    const squares = prompt('How many squares per side you want? (Ex: 5)');
    const newContainer = document.createElement('div')
    newContainer.classList.add('container');
    body.replaceChild(newContainer,container);
    for (i=1;i<=squares;i++){
        const horizontalSquare = document.createElement('div');
        newContainer.appendChild(horizontalSquare);
        for (f=1;f<=squares;f++){
            const verticalSquare = document.createElement('div');
            verticalSquare.textContent='';
            verticalSquare.style.height='25px';
            verticalSquare.style.width='25px';
            verticalSquare.style.border='0.5px solid black';
    
            verticalSquare.addEventListener('mouseover',() =>{
                verticalSquare.style.backgroundColor='green';
            })
                horizontalSquare.appendChild(verticalSquare);
        }
    }

})

