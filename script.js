const txtInput = document.querySelector("input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

let userInput = "";

checkBtn.addEventListener("click", checkReverse);

txtInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") checkBtn.click();

  if (event.target.value !== "") checkBtn.classList.add("active");
  else {
    checkBtn.classList.remove("active");
    infoTxt.style.display = "none";
  }
});

function checkReverse() {
  userInput = txtInput.value.trim().toLowerCase();

  const reverseInput = userInput.split("").reverse().join("");
  infoTxt.style.display = "block";

  if (userInput !== reverseInput)
    infoTxt.innerHTML = `Non, <span> '${userInput}' </span> n'est pas un palindrome!`;
  else infoTxt.innerHTML = `Oui, <span>'${userInput}'</span> est un palindrome!`;
}

