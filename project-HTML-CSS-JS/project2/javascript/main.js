import { d, labels, inputs, copy, reset } from "./const.js";
const box = d.getElementById("box");
const show = d.getElementById("show");

function borderTopL() {
  labels["label-tl"].textContent = inputs.btl.value;
  box.style.borderTopLeftRadius = `${inputs.btl.value}px`;
  show.value = `border-radius: ${inputs.btl.value}px ${inputs.btr.value}px ${inputs.bbr.value}px ${inputs.bbl.value}px`;
}

function borderTopR() {
  labels["label-tr"].textContent = inputs.btr.value;
  box.style.borderTopRightRadius = `${inputs.btr.value}px`;
  show.value = `border-radius: ${inputs.btl.value}px ${inputs.btr.value}px ${inputs.bbr.value}px ${inputs.bbl.value}px`;
}

function borderBottomL() {
  labels["label-bl"].textContent = inputs.bbl.value;
  box.style.borderBottomLeftRadius = `${inputs.bbl.value}px`;

  show.value = `border-radius: ${inputs.btl.value}px ${inputs.btr.value}px ${inputs.bbr.value}px ${inputs.bbl.value}px`;
}

function borderBottomR() {
  labels["label-br"].textContent = inputs.bbr.value;
  box.style.borderBottomRightRadius = `${inputs.bbr.value}px`;

  show.value = `border-radius: ${inputs.btl.value}px ${inputs.btr.value}px ${inputs.bbr.value}px ${inputs.bbl.value}px`;
}
function copyText() {
  show.select();
  navigator.clipboard.writeText(show.value);
  alert("Text copied");
}

inputs.btl.addEventListener("input", borderTopL);

inputs.btr.addEventListener("input", borderTopR);

inputs.bbr.addEventListener("input", borderBottomR);

inputs.bbl.addEventListener("input", borderBottomL);

copy.addEventListener("click", copyText);
