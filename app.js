let winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [9, 5, 1],
  [3, 5, 7],
];

const boxElement = document.querySelectorAll(".box");
let click = 0;
let xAttempts = [];
let oAttempts = [];
let isWon = false;
let msgBox = document.getElementById("message");
let resultBox = document.getElementById("result");

boxElement.forEach((box) => {
  box.onclick = handleclick;
});

function handleclick(event) {
  let id = event.target.id;
  let pTag = document.createElement("p");
  pTag.setAttribute("class", "text");
  pTag.style.color = "#F6B343";

  boxElement[id - 1].appendChild(pTag);
  if (click % 2 == 0) {
    pTag.innerText = "X";
    xAttempts.push(parseInt(id));
    result(xAttempts, "X");
  } else {
    pTag.innerText = "O";
    oAttempts.push(parseInt(id));
    result(oAttempts, "O");
  }
  click++;

  if (click === 9 && isWon == false) {
    resultBox.style.visibility = "visible";
    msgBox.innerText = "It's a Tie.....";
  }
}

function result(playersArray, player) {
  for (let i = 0; i < winningCombos.length; i++) {
    let check = true;
    for (let j = 0; j < winningCombos[i].length; j++) {
      if (!playersArray.includes(winningCombos[i][j])) {
        check = false;
        break;
      }
    }

    if (check) {
      isWon = true;
      resultBox.style.visibility = "visible";
      msgBox.innerHTML = `${player} has won.....`;
    }
  }
}
document.getElementById("button").onclick = () => {
  location.reload();
};
