
// function randomInt () {

//     return Math.floor(Math.random * 21)
// }

let food = { x: 1, y: 1 }
const EXPANSION_RATE = 1

export function update () {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = { x: 20, y: 10 }
    }
}

export function draw (gameBoard) {

        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x
        foodElement.style.gridColumnStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}
