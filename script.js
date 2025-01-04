const container = document.querySelector('.container');


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
