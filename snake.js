import { getInputDirection } from "./input.js"


//how many times the snake moves per second
export const snakeSpeed = 10

// create array for snake body coorindates. This ishow we represnet our snake.
// because were using a grid we can represent our snake with an x and y position.
// just a bunch of segments ina particular x y position on the grid
const snakeBody = [{ x: 10, y: 11 }]

let newSegments = 0

export function update () {

    //function for adding segments on to the end of snake
    // everytime we update(for now)

    addSegments()


    const inputDirection = getInputDirection()
    for ( let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]}
    }

    // this is hardcorded right now. this is what is making the snake move
    //in order to have inputs you must create event listeners for the arrow keys

    // snakeBody[0].x += 0
    // snakeBody[0].y += 1


    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


}

export function draw (gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

//the amount input gives the option of changing how much the snake increases in size everytime it eats a fruit
export function expandSnake(amount) {
    newSegments += amount
}

//check whether the fruit is in the same place as the snake. the .some function returns true if equal positions returns true for any segment of the snake body.
//Note: the option parameter sets ignore head to false on default if anything is passed
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0
}


export function snakeHeadPosition () {
    return snakeBody[0]
}

export function intersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}
