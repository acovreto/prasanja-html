let eng = [
  "Yes",
  "no",
  "are",
  "is",
  "the",
  "it",
  "and",
  "What",
  "will",
  "in",
  "for",
  "that",
  "you",
  "that",
  "by",
  "with",
  "Mi",
  "You are",
  "her",
  "How",
  "I",
  "This",
];
let mk = [
  "Да",
  "Не",
  "се",
  "е",
  "на",
  "тоа",
  "и",
  "Што",
  "волја",
  "во",
  "за",
  "тоа",
  "ти",
  "тоа",
  "од",
  "со",
  "Ми",
  "Ти си",
  "Нејзината",
  "Како",
  "Јас",
  "Ова",
];
let rndIndex;
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const panel = document.querySelector(".panel");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const lang = document.querySelector(".lang");
const scoreCount = document.querySelector("#score-count");
const wordCount = document.querySelector("#word-count");
const wrongEl = document.querySelector("#wrong");
const resetEl = document.querySelector("#reset");
function checkFunc() {
  engWordEl.textContent = mk[rndIndex];
  panel.style.backgroundColor = "white";
  panel.style.color = "#1c6bff";
  btn1.style.display = "none";
  btn2.style.display = "flex";
  lang.textContent = "Македонски";
  wordCount.textContent = Number(wordCount.textContent) + 1;
}
function correctFunc() {
  engWordEl.textContent = mk[rndIndex];
  panel.style.color = "white";
  panel.style.backgroundColor = "#1c6bff";
  btn2.style.display = "none";
  btn1.style.display = "flex";
  lang.textContent = "English";
  scoreCount.textContent = Number(scoreCount.textContent) + 1;
  init();
}
function wrongFunc() {
  engWordEl.textContent = mk[rndIndex];
  panel.style.color = "white";
  panel.style.backgroundColor = "#1c6bff";
  btn2.style.display = "none";
  btn1.style.display = "flex";
  lang.textContent = "English";
  init();
}

function resetFun() {
  scoreCount.textContent = 0;
  wordCount.textContent = 0;
  init();
}
let engWordEl = document.querySelector(".eng-word");
console.log(engWordEl);
let arrLenth = eng.length;
console.log(arrLenth);
const init = function () {
  rndIndex = randomNumber(0, arrLenth - 1);
  let wordEng = eng[rndIndex];
  engWordEl.textContent = wordEng;
};
init();
const checkEl = document.querySelector("#check");
console.log(checkEl);
checkEl.addEventListener("click", checkFunc);
const correctEL = document.querySelector("#correct");
correctEL.addEventListener("click", correctFunc);
const reset = document.querySelector("#reset");
reset.addEventListener("click", resetFun);
wrongEl.addEventListener("click", wrongFunc);
