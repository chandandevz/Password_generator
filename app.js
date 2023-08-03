let pass = document.querySelector("#pass");
let btn = document.querySelector("#btn");

//password generator function 

const getPass = () => {
    let character = "0123456789@#₹%"
    let finals = Math.floor(Math.random()*10);
    
    for(let i=0; i<7; i++){
       finals =finals+  character[Math.floor(Math.random()*14)];
    }
    
    pass.innerText = finals;
}


btn.addEventListener("click", getPass);