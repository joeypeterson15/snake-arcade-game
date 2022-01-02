// setup a game loop

import { intersection, snakeHeadPosition, update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')




function main(currentTime) {
    window.requestAnimationFrame(main)

    if (gameOver) window.alert('you lose the game')

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return


    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update () {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(snakeHeadPosition()) || intersection()
}

function outsideGrid (head) {
    return (head.x > 21 || head.y > 21 || head.x < 1 || head.y < 1)
}
