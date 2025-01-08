const container = document.querySelector('.container');
const sizeGridButton = document.querySelector('#gridSize');
const body = document.querySelector('body');

// VARIABLES TO CHOOSE ACTION:
const randomButton = document.querySelector('#randomButton');
const eraseButton = document.querySelector('#eraseButton');



function hoverColor(square){
    let randomNumber1=Math.round(Math.random()*255);
    let randomNumber2=Math.round(Math.random()*255);
    let randomNumber3=Math.round(Math.random()*255);

    let color= 'rgb('+randomNumber1+','+randomNumber2+','+randomNumber3+')';


    // When hover, background color is green
    square.addEventListener('mouseover',() =>{
        square.style.backgroundColor='green';
    })
    // When clicked, background color in hover is random
    randomButton.addEventListener('click', ()=>{
        square.addEventListener('mouseover',() =>{
            square.style.backgroundColor=color;
        })
    })
    // When clicked, background color is erased
    eraseButton.addEventListener('click', ()=>{
        square.style.backgroundColor='white';
    })
}

// 16*16 GRID:
for (i=1;i<=16;i++){
    const horizontalSquare = document.createElement('div');
    container.appendChild(horizontalSquare);
    for (f=1;f<=16;f++){
        const verticalSquare = document.createElement('div');
        //size of the whole grid (500):
        const sizeWholeGrid = (500/16-1)+'px';
        verticalSquare.textContent='';
        verticalSquare.style.height=sizeWholeGrid;
        verticalSquare.style.width=sizeWholeGrid;
        verticalSquare.style.backgroundColor='white';
        verticalSquare.style.border='0.5px solid black';
        

        hoverColor(verticalSquare);    
        
        
        horizontalSquare.appendChild(verticalSquare);
    }
    
}
// CHOOSE SIZE OF GRID ON CLICK:
sizeGridButton.addEventListener('click', () => {
    const squares = prompt('How many squares per side you want? (Ex: 5)');
    const newContainer = document.createElement('div')
    newContainer.classList.add('container');
    const oldContainer = document.querySelector('.container');

    //IF IS HIGHER THAN 100 SQUARES, IT WONT WORK.
    if (squares <=100){
        body.replaceChild(newContainer,oldContainer);

        for (i=1;i<=squares;i++){
            const horizontalSquare = document.createElement('div');
            newContainer.appendChild(horizontalSquare);
            for (f=1;f<=squares;f++){
                const verticalSquare = document.createElement('div');
    
                //size of the whole grid (500):
                const sizeWholeGrid = (500/squares-1)+'px';
    
                verticalSquare.textContent='';
                verticalSquare.style.height=sizeWholeGrid;
                verticalSquare.style.width=sizeWholeGrid;
                verticalSquare.style.backgroundColor='white';
                verticalSquare.style.border='0.5px solid black';
                
                hoverColor(verticalSquare);    

                
                horizontalSquare.appendChild(verticalSquare);
            }
        }

    } else{
        alert('It cannot be higher than 100');
    }
    

})

