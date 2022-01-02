import { onSnake, expandSnake } from './snake.js'



// let food = getRandomFoodPosition()
let food = {x: 1, y: 1}
const EXPANSION_RATE = 1

export function update () {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        // food = {x: 5, y: 8}
    }
}

export function draw (gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.x
    foodElement.style.gridColumnStart = food.y
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition () {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

function randomGridPosition () {
    let x = Math.floor(Math.random() * 21) + 1
    let y = Math.floor(Math.random() * 21) + 1
    console.log('x', x, 'y', y)
    return { x:x, y:y }
}
