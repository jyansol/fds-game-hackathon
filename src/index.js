let boardStatue = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const againEl = document.querySelector('.again');

function drawBorad() {
  document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
    rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
      if (boardStatue[rowIndex][colIndex] === 1) {
        colEl.classList.add('checked');
      } else {
        colEl.classList.remove('checked');
      }
    });
  });
  if (bingo(boardStatue)) {
    document.querySelector('.result').textContent = 'BINGO!';
    againEl.classList.add('open');
  } else {
    document.querySelector('.result').textContent = '';
    againEl.classList.remove('open');
  }
}
drawBorad();

againEl.addEventListener('click', (e) => {
  boardStatue = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
  drawBorad();
});

function bingo(arr) {
  for (let i = 0; i < 5; i++) {
    let checked = true;
    for (let j = 0; j < 5; j++) {
      if (arr[i][j] === 0) {
        checked = false;
      }
    }
    if (checked) {
      return true;
    }
  }

  for (let i = 0; i < 5; i++) {
    let checked = true;
    for (let j = 0; j < 5; j++) {
      if (arr[j][i] === 0) {
        checked = false;
      }
    }
    if (checked) {
      return true;
    }
  }

  {
    let checked = true;
    for (let j = 0; j < 5; j++) {
      if (arr[j][j] === 0) {
        checked = false;
      }
    }
    if (checked) {
      return true;
    }
  }

  {
    let checked = true;
    for (let j = 0; j < 5; j++) {
      if (arr[j][4 - j] === 0) {
        checked = false;
      }
    }
    if (checked) {
      return true;
    }
  }

  return false;
}

document.querySelectorAll('.row').forEach((rowEl, rowIndex) => {
  rowEl.querySelectorAll('.col').forEach((colEl, colIndex) => {
    colEl.addEventListener('click', (e) => {
      //빙고가 되면 더이상 체크되지 않는 코드
      if (!bingo(boardStatue)) {
        boardStatue[rowIndex][colIndex] = 1;
        drawBorad();
      }
    });
  });
});
