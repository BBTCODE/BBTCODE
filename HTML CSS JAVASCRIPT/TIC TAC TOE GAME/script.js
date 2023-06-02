// define variable
let music = new Audio("images/win.mp3");
let audioturn = new Audio("images/ting.mp3");
let turn = "x";
let changecolor2 = document.getElementsByClassName("btn")[1];
let changecolor1 = document.getElementsByClassName("btn")[0];
let resultshow = document.querySelector(".result h1");
const result = document.querySelector(".result");
let drawaudio = new Audio("images/gameover.mp3");

// turn change

const turnchange = () => {
  return turn === "x" ? "0" : "x";
};

//  main game logic start

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((elements) => {
  let boxtext = elements.querySelector(".box-text");
  elements.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = turnchange();
      checkwin();
      audioturn.play();
      if (turn === "x") {
        changecolor1.classList.add("active");
        changecolor2.classList.remove("active");
      }
      if (turn === "0") {
        changecolor2.classList.add("active");
        changecolor1.classList.remove("active");
      }
      checkdraw();
    }
  });
});
// check for win possibility
const checkwin = () => {
  let boxtext = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      result.classList.remove("inactive");
      music.play();
      resultshow.innerText =
        boxtext[e[0]].innerText + " - " + "Won the Game !!";
      let image = document.getElementById("imgs");
      image.src = "images/excited.gif";
    }
  });
};

// Add onclick listener to reset button
let reset = document.getElementById("Restart");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".box-text");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "x";
  result.classList.add("inactive");
});

// draw
checkdraw = () => {
  let b1 = document.getElementById("b1").innerText;
  let b2 = document.getElementById("b2").innerText;
  let b3 = document.getElementById("b3").innerText;
  let b4 = document.getElementById("b4").innerText;
  let b5 = document.getElementById("b5").innerText;
  let b6 = document.getElementById("b6").innerText;
  let b7 = document.getElementById("b7").innerText;
  let b8 = document.getElementById("b8").innerText;
  let b9 = document.getElementById("b9").innerText;

  if (
    (b1 == "x" || b1 == "0") &&
    (b2 == "x" || b2 == "0") &&
    (b3 == "x" || b3 == "0") &&
    (b4 == "x" || b4 == "0") &&
    (b5 == "x" || b5 == "0") &&
    (b6 == "x" || b6 == "0") &&
    (b7 == "x" || b7 == "0") &&
    (b8 == "x" || b8 == "0") &&
    (b9 == "x" || b9 == "0")
  ) {
    resultshow.innerText = "Draw";
    drawaudio.play();
    let image = document.getElementById("imgs");
    image.src = "images/draw.gif";
    result.classList.remove("inactive");
  }
};
