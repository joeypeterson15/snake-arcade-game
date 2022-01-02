import { onSnake, expandSnake } from './snake.js'



let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update () {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
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
    return { x, y }
}
