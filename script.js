'use strict';

document.addEventListener('DOMContentLoaded', function () {


    let game = document.querySelector('.game--container'),
        btnRestartGame = document.querySelector('.game--restart'),
        cells = document.querySelectorAll('.cell'),
        step = false,
        count = 0,
        gameStatus = document.querySelector('.game--status'),
        circle = 'O',
        cross = 'X';

    console.log(gameStatus);

    function gameStart(event) {
        if (!step) {
            stepCross(event.target);
        } else stepCircle(event.target);
        step = !step;
        win();
    }

    function stepCross(target) {
        target.innerHTML = cross;
        target.classList.add('cross');
        gameStatus.innerText = `It's O's turn`;
        count++;
    }

    function stepCircle(target) {
        target.innerHTML = circle;
        target.classList.add('circle');
        gameStatus.innerText = `It's X's turn`;
        count++;
    }

    function restartGame() {
        step = false;
        count = 0;
        gameStatus.innerText = `It's X's turn`;
        cells.forEach(item => {
            item.innerHTML = '';
            item.classList.remove('x', 'o', 'active');
        });


    }
    console.log(cells);
    function win() {
        let winningLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningLine.length; i++) {
            if (cells[winningLine[i][0]].classList.contains('cross') &&
                cells[winningLine[i][1]].classList.contains('cross') &&
                cells[winningLine[i][2]].classList.contains('cross')) {

                cells[winningLine[i][0]].classList.add('active');
                cells[winningLine[i][1]].classList.add('active');
                cells[winningLine[i][2]].classList.add('active');

                gameStatus.innerText = 'Winner Х !!!';
                game.removeEventListener('click', gameStart);

            } else if (cells[winningLine[i][0]].classList.contains('circle') &&
                cells[winningLine[i][1]].classList.contains('circle') &&
                cells[winningLine[i][2]].classList.contains('circle')) {

                cells[winningLine[i][0]].classList.add('active');
                cells[winningLine[i][1]].classList.add('active');
                cells[winningLine[i][2]].classList.add('active');

                gameStatus.innerText = 'Winner O !!!';
                game.removeEventListener('click', gameStart);

            } else if (count === 9) {
                gameStatus.innerHTML = 'Draw !';
                game.removeEventListener('click', gameStart);
            }
        }
    }

    btnRestartGame.addEventListener('click', restartGame);
    game.addEventListener('click', gameStart);



});
