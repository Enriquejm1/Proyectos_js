//Obtener elementoa del dom
const codeEditor = document.getElementById("code-editor");
const outputDiv = document.getElementById("output");
const runButton = document.getElementById("run-button");
console.log(codeEditor.value);

runButton.addEventListener("click",runcode)

//Definir funcion
function runcode(){
    const code = codeEditor.value;
    try {
        const result = eval(code);
        outputDiv.textContent = result;
    } catch (error) {
        outputDiv.textContent = `Error:${error.message}`;
    }
}