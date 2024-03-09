let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const messageElement = document.getElementById('message');

function checkWinner() {
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[a];
    }
  }
  return null;
}

function checkDraw() {
  return gameBoard.every(cell => cell !== '');
}

function handleResult(result) {
  gameActive = false;
  if (result === 'X' || result === 'O') {
    messageElement.textContent = `${result} wins!`;
  } else {
    messageElement.textContent = 'It\'s a draw!';
  }
}

function makeMove(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
      handleResult(winner);
    } else if (checkDraw()) {
      handleResult();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      messageElement.textContent = `${currentPlayer}'s turn`;
    }
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  messageElement.textContent = `${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
