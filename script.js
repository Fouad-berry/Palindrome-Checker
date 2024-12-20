const txtInput = document.querySelector("input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

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
  let userInput = txtInput.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  const reverseInput = userInput.split("").reverse().join("");
  infoTxt.style.display = "block";

  if (userInput !== reverseInput)
    infoTxt.innerHTML = `Non, <span> '${txtInput.value}' </span> n'est pas un palindrome!`;
  else
    infoTxt.innerHTML = `Oui, <span>'${txtInput.value}'</span> est un palindrome!`;
}
