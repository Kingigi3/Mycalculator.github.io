let toggle = document.querySelector(".toggle");
let label = document.getElementById("label");
let state = 0;

toggle.addEventListener("click", () => {
  state = (state + 1) % 3;
  if (state === 0) label.style.left = "5px";
  if (state === 1) label.style.left = "30px";
  if (state === 2) label.style.left = "55px";
});
