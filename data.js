const questions = [
  {
    que: "Javascript is an _______ language",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
  },
  {
    que: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
  {
    que: "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementbyId()",
    b: "getElementByClassName()",
    c: "Both A and B",
    d: "None of the above",
    correct: "c",
  },
];

let index = 0,
  total = questions.length,
  right = 0;
const queBox = document.getElementById("quConh1");
const inputOptions = document.getElementsByClassName("opt");
const prev = document.getElementById("quizPrev");

const loadQuestion = () => {
  if (!index) {
    prev.setAttribute("disabled", true);
  }
  const data = questions[index];
  queBox.innerText = data.que;
  inputOptions[0].nextElementSibling.innerText = data.a;
  inputOptions[1].nextElementSibling.innerText = data.b;
  inputOptions[2].nextElementSibling.innerText = data.c;
  inputOptions[3].nextElementSibling.innerText = data.d;
};

const getAnswer = () => {
  let ans;
  Array.from(inputOptions).forEach((input) => {
    // console.log(input.value);
    if (input.checked) {
      ans = input.value;
    }
  });
  return ans;
};

const clear = () => {
  Array.from(inputOptions).forEach((input) => {
    input.checked = false;
  });
};

const prevQuestion = () => {
  index--;
  right--;
  loadQuestion();
};

const end = () => {
  document.getElementById("quCon").innerHTML = `
    <h1>Here is Your Result</h1>
    <h2>${right} / ${total}<h2>`;
};

const subQuestion = () => {
  const data = questions[index];
  if (getAnswer() == data.correct) {
    right++;
  }
  index++;
  if (index == total) {
    return end();
  }
  clear();
  if (index) {
    prev.removeAttribute("disabled");
  }
  loadQuestion();
};

//Initial call
loadQuestion();
