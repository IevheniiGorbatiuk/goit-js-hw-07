const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) =>{
    const trimedInput = event.currentTarget.value.trim();
    if(trimedInput != "") 
    {textOutput.textContent = trimedInput;
    };
    else 
    {textOutput.textContent = "Anonymous";
    };
});