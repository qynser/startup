const form = document.getElementById("###");
// get message from html file
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
});

// in CSS how to make message bold?
// #message {font-weight: bold;}
//flex stuff
// .button{
// display: flex;
// flex-direction: column;
// }

// # for id=
// . for class and type

// .button {border-color: "red";}
//

document.getElementById("minus").onclick = () => {
  if (count < 1) {
  }
};

const plus5 = document.getElementById("plus5");

plus5.onclick = () => {
  count += 5;
  number.textContent = count;
  number.style.color = "red";
};
