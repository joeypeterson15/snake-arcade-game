import { getInputDirection } from "./input.js"

export const snakeSpeed = 3

// create array for snake body coorindates (vectors). This ishow we represnet our snake.
// because were using a grid we can represent our snake with an x and y position.
// just a bunch of segments ina particular x y position on the grid
const snakeBody = [{ x: 10, y: 11 }]

export function update () {

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
