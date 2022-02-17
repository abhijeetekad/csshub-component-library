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
