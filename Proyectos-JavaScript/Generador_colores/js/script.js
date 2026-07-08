const rRange = document.getElementById("rRange");
const gRange = document.getElementById("gRange");
const bRange = document.getElementById("bRange");

const colorDisplay = document.getElementById("colorDisplay");
const rgbValue = document.getElementById("rgbValue");

function updatecolor() {
  const r = rRange.value;
  const g = gRange.value;
  const b = bRange.value;

  const rgbStr = `RGB(${r},${g},${b})`;
  colorDisplay.style.backgroundColor = rgbStr;
  rgbValue.textContent = rgbStr;
}

rRange.addEventListener("input", updatecolor);
gRange.addEventListener("input", updatecolor);
bRange.addEventListener("input", updatecolor);

updatecolor();

const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(rgbValue.textContent)
    .then(() => {
      alert("Color copiado");
    })
    .catch((err) => {
      console.log("Error al copiar el codigo del color", err);
      alert("No se pudo copiar el color");
    });
});
