const WC = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


const theGameBoard = (()=>{
    
    const gameBoard = ['A','B','C','','','','','','',]

    const boardHTML = document.querySelector('.gameBoard')
    function renderBoard(){
        for (let i = 0; i < gameBoard.length; i++) {
            const tile = document.createElement('div')
            boardHTML.appendChild(tile)
            tile.classList.add('gameTile')
            
        }
    }
    return { 
        renderBoard
    }

})();

theGameBoard.renderBoard()

const playerFactory = (name,marker)=>{
    return {name,marker}
}











// function renderBoard(){
//     board.innerHTML = ''
//     for (let i = 0; i < gameBoard.length; i++) {
//         const tile = document.createElement('div')       
//         tile.classList.add('gameTile')
//         tile.setAttribute('data-cellindex', i )
//         tile.innerHTML = gameBoard[i]
//         board.appendChild(tile)
//     }
// }


        // .addEventListener('click',()=>{
        //     //manipluate gameboard arrasy
        //     gameBoard[i] = playerTurn()
        //     tile.innerHTML = gameBoard[i]
        //     checkForWinner()
        // })


// renderBoard()

function playerTurn(){ 
    for (let i = 0; i < gameBoard.length; i++) {
        turnCounter ++
        if(turnCounter%2 == 0){
            return player1
        } else {
            return player2
        }}
    
}

function checkForWinner(){
// if player winning 3 are the same - declare winner
    for (let i = 0; i < WC.length; i++) {
        if((gameBoard[WC[i][0]] != '') == (gameBoard[WC[i][1]] != '') && (gameBoard[WC[i][1]] != '') == (gameBoard[WC[i][2]] !='')){
            console.log('winnnner')
        }
        
    }
}


document.querySelectorAll('[data-cellindex]').forEach((x)=>{
    x.addEventListener('click',()=>{
        console.log(x.dataset.cellindex)
        gameBoard[x.dataset.cellindex] = playerTurn()
        console.log(gameBoard)
        renderBoard()
    

    })
})