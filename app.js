const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const result = document.querySelector(".result");

const calculateText = (text) => {
  console.log(text);
};

const onSubmit = (event) => {
  event.preventDefault();
  let inputTextArea = textarea.value;
  let print = "";

  context.innerText = inputTextArea;

  for (let i = 0; i < inputTextArea.length; i++) {
    if (inputTextArea[i] === "\n") {
      console.log(inputTextArea.slice(0, i + 1));

      if (inputTextArea[0] === "ｏ") {
        //print += inputTextArea.slice(0, i);
        print += "/\n";
      } else {
        //print += inputTextArea.slice(0, i + 1);
        print += "\n";
      }
      inputTextArea = inputTextArea.slice(i + 2);
      i = 0;
    } else if (i === inputTextArea.length - 1) {
      //print += inputTextArea.slice(0, i + 1);
      if (inputTextArea[0] === "ｏ") {
        print += "/\n";
      }
    }
  }

  result.innerText = print;
};

form.addEventListener("submit", onSubmit);
