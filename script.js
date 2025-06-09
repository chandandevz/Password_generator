const passBox = document.getElementById("pass-box");
const rangeBar = document.getElementById("range");
const rangeValue = document.getElementById("range-value");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate-button");
const copyBtn = document.getElementById("copy-btn");
const statusElement = document.querySelector(".online")
const statusElementTxt = document.querySelector(".status-txt")
const statusElementContainer = document.querySelector(".online-status")

rangeValue.innerText = rangeBar.value;
rangeBar.addEventListener("input", () => {
  rangeValue.innerText = rangeBar.value;
});

generateBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});
function generatePassword() {
  const upperCaseInstance = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseInstance = "abcdefghijklmnopqrstuvwxyz";
  const numberInstance = "0123456789";
  const symbolInstance = '@#₹_&-+()/*":;!?%$/^';
  let generatedPass = "";
  let allChar = "";
  allChar += upperCase.checked ? upperCaseInstance : "";
  allChar += lowerCase.checked ? lowerCaseInstance : "";
  allChar += number.checked ? numberInstance : "";
  allChar += symbol.checked ? symbolInstance : "";

  for (let i = 0; i < rangeBar.value; i++) {
    generatedPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }

  return generatedPass;
}

copyBtn.addEventListener("click", () => {
  if (passBox.value == "") {
    alert("No pass Generated");
  } else {
    navigator.clipboard.writeText(passBox.value);
    copyBtn.style.color = "green";
    copyBtn.style.boxShadow = "0px 0px 4px #30ff9b";
    setTimeout(() => {
      copyBtn.style.color = "";
      copyBtn.style.boxShadow = "";
    },3000);
  }
});

if(onlineStatus){
  statusElement.style.backgroundColor = "#0ec764";
  statusElementTxt.innerText = "Online";
  statusElementContainer.style.border = "1px solid #0ec764";
  statusElementContainer.style.boxShadow = "0px 0px 8px 4px #0ec764";

}else{
  statusElement.style.backgroundColor = "red";
  statusElementTxt.innerText = "Offline";
  statusElementContainer.style.border = "1px solid red";
  statusElementContainer.style.boxShadow = "0px 0px 8px 4px red";
}

setInterval(()=>{
  if(navigator.onLine){
  statusElement.style.backgroundColor = "#0ec764";
  statusElementTxt.innerText = "Online";
  statusElementContainer.style.border = "1px solid #0ec764";
  statusElementContainer.style.boxShadow = "0px 0px 8px 4px #0ec764";
  console.log("Checking Online...")
  console.log(onlineStatus)
  }else{
  statusElement.style.backgroundColor = "red";
  statusElementTxt.innerText = "Offline";
  statusElementContainer.style.border = "1px solid red";
  statusElementContainer.style.boxShadow = "0px 0px 8px 4px red";
  console.log("Checking Offline...")
}
},5*1000)
