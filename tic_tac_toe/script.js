var playboard = document.getElementById('playboard');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('currPlayer');

// указываем игрока, который начинает игру
var player = 'x';

// объявляем выигрышные для нас позиции (индексы) через массив
var wins = [
    // по горизонтали
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // по вертикали
    [1, 4, 7],
    [2, 5 ,8],
    [3, 6, 9],
    // по диагонали
    [1, 5, 9],
    [3, 5, 7]
];

// цикл дял добавления наших игровых клеток
for(var i = 1; i <= 9; i++) {
    playboard.innerHTML += f`<div class = 'cell' pos = ${i}></div>`;
}

// отслеживаем события: нажатие на клетку
for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
};

// основаная рабочая функция
function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert('Ячейка занята');
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    // проверка выигрыша
    if(checkWin(data)) {
        restart('Выграл игрок с: ' + player);
    } else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {restart('А вот это ничья');}
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in wins) {
        var win = true;
        for(var j in wins[i]) {
            var id = wins[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if (win) return true;
    }
    return false;
}

function restart(text) {
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
}



