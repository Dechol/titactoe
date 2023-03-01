const gameObj = (()=>{

    const gameBoard = ['','','','','','','','','',]
    const player1 = 'X'
    const player2 = '0'




})()


const player = (name,marker) =>{
    return{name,marker}
}

const jeff = player('jeff','X')


player.isWinner = function(){
    return `${this.name} is the winner`
}

console.log(jeff.isWinner)

