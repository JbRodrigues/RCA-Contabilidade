/*FUNÇAO PARA ADICIONAR O UNDERLINE NAS SEÇOES 'HELP' E 'HERO' DO INDEX.HTML DE FORMA DINAMICA*/
document.querySelector(".hero").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target");
  targetWords.forEach((word) => {
    word.classList.add("underline");
  });
});

document.querySelector(".hero").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target");
  targetWords.forEach((word) => {
    word.classList.remove("underline");
  });
});

/*-------------------------------------------------------------------------------*/
document.querySelector(".help").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target1");
  targetWords.forEach((word) => {
    word.classList.add("underline");
  });
});

document.querySelector(".help").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target1");
  targetWords.forEach((word) => {
    word.classList.remove("underline");
  });
});

/*-------------------------------------------------------------------------------*/
document.querySelector(".contact-form").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target2");
  targetWords.forEach((word) => {
    word.classList.add("underline");
  });
});

document.querySelector(".contact-form").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target2");
  targetWords.forEach((word) => {
    word.classList.remove("underline");
  });
});
