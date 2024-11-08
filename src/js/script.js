// TODO

let aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color = "red";

let enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAClick.addEventListener("click", (evt) => {
  enRougeSuiteAClick.style.color = "red";
});

var collH2 = document.querySelectorAll("H2");
collH2.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});
