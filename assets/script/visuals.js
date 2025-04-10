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

/*-------------------------------------------------------------------------------*/
document.querySelector("#about-card1").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target3");
  targetWords.forEach((word) => {
    word.classList.add("underline3");
  });
});

document.querySelector("#about-card1").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target3");
  targetWords.forEach((word) => {
    word.classList.remove("underline3");
  });
});

/*-------------------------------------------------------------------------------*/
document.querySelector("#about-card2").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target4");
  targetWords.forEach((word) => {
    word.classList.add("underline4");
  });
});

document.querySelector("#about-card2").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target4");
  targetWords.forEach((word) => {
    word.classList.remove("underline4");
  });
});

/*-------------------------------------------------------------------------------*/
document.querySelector("#about-card3").addEventListener("mouseenter", function () {
  const targetWords = document.querySelectorAll(".underline-target5");
  targetWords.forEach((word) => {
    word.classList.add("underline5");
  });
});

document.querySelector("#about-card3").addEventListener("mouseleave", function () {
  const targetWords = document.querySelectorAll(".underline-target5");
  targetWords.forEach((word) => {
    word.classList.remove("underline5");
  });
});


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}




