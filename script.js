const container = document.querySelector('.container');

for (i=1;i<=16;i++){
    const horizontalSquare = document.createElement('div');
    container.appendChild(horizontalSquare);
    for (f=1;f<=16;f++){
        const verticalSquare = document.createElement('div');
        verticalSquare.textContent='*';
        horizontalSquare.appendChild(verticalSquare);
    }
    
}