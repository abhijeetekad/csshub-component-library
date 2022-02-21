/* Live modal */
let showModal = document.querySelector(".show-modal");
let liveModal = document.querySelector(".live-modal");
let closeModal = document.querySelector(".close-modal");

showModal.addEventListener("click", () => {
  liveModal.classList.add("live-modal-active");
});

closeModal.addEventListener("click", () => {
  liveModal.classList.remove("live-modal-active");
});
/**slider */

const slider = document.querySelector(".slider-input");
const value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value;
};
/***snackbar** */

let baseLineBtn = document.querySelector("#base-line-btn");
let snackbarContainer2 = document.querySelector(".base-line-snackbar");
let stackedLineBtn = document.querySelector("#stacked-line-btn");
let leadingBtn = document.querySelector("#leading-line-btn");
let snackbarContainer3 = document.querySelector(".leading-snackbar");
let snackbarContainer4 = document.querySelector(".stacked-snackbar");

baseLineBtn.addEventListener("click", () => {
  snackbarContainer2.style.visibility = "visible";

  setTimeout(() => {
    snackbarContainer2.style.visibility = "hidden";
  }, 1000);
});

leadingBtn.addEventListener("click", () => {
  snackbarContainer3.style.visibility = "visible";

  setTimeout(() => {
    snackbarContainer3.style.visibility = "hidden";
  }, 1000);
});

stackedLineBtn.addEventListener("click", () => {
  snackbarContainer4.style.visibility = "visible";
  setTimeout(() => {
    snackbarContainer4.style.visibility = "hidden";
  }, 1000);
});
/********** */
