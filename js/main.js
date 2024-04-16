const menuBtn = document.querySelector(".js-menu-btn");
const elToggleForm = document.querySelector(".js-toggle-form");
const elToggleWrapper = elToggleForm.querySelector(".js-wrapper");
const elToggleOpanImg = elToggleForm.querySelector(".js-toggle-opan");
const elToggleClosedImg = elToggleForm.querySelector(".js-toggle-closed");
const elBlockToggle = elToggleForm.querySelector(".js-toggle-first");
const elToggleWrapperr = elToggleForm.querySelector(".js-wrapperr");
const elBlockTypeBox = elToggleForm.querySelector(".js-toggle-type");
const elBlockKilo = elToggleForm.querySelector(".js-toggle-kilo");
const elKiloWrapper = elToggleForm.querySelector(".js-kilo-Wrapper");
const elBlockGrind = elToggleForm.querySelector(".js-toggle-grind");
const elGrindWrapper = elToggleForm.querySelector(".js-grind-wrapper");
const elBlockShould = elToggleForm.querySelector(".js-toggle-should");
const elShouldWrapper = elToggleForm.querySelector(".js-should-wrapper");
const toggleTitle = elToggleForm.querySelectorAll(".toggle__title");
const elToggleInp = elToggleForm.querySelectorAll(".js-toggle-inp");
const elWrapper = document.querySelectorAll(".wrapper");
const elToggleResult = document.querySelector(".js-toggle-result");

// manu
const mainMenuBtnFn = () => {
  menuBtn.closest(".site-header").classList.toggle("open-menu");
  document.body.classList.toggle("unscrol");
};
menuBtn.addEventListener("click", mainMenuBtnFn);

let arr = [];

let newArr = [];

const dataFn = () => {
  elBlockToggle.addEventListener("click", (evt) => {
    evt.preventDefault();
    elToggleWrapper.classList.toggle("toggle-open");
    elBlockToggle.classList.toggle("open");
  });
  // 2
  elBlockTypeBox.addEventListener("click", (evt) => {
    evt.preventDefault();
    elToggleWrapperr.classList.toggle("toggle-open");
    elBlockTypeBox.classList.toggle("open");
  });
  // 3
  elBlockKilo.addEventListener("click", (evt) => {
    evt.preventDefault();
    elKiloWrapper.classList.toggle("toggle-open");
    elBlockKilo.classList.toggle("open");
  });
  // 4
  elBlockGrind.addEventListener("click", (evt) => {
    evt.preventDefault();
    elGrindWrapper.classList.toggle("toggle-open");
    elBlockGrind.classList.toggle("open");
  });
  // 5
  elBlockShould.addEventListener("click", (evt) => {
    evt.preventDefault();
    elShouldWrapper.classList.toggle("toggle-open");
    elBlockShould.classList.toggle("open");
  });
};
dataFn();

for (const items of elToggleInp) {
  items.addEventListener("click", (evt) => {
    evt.preventDefault();

    const itemValue = items.value;
    newArr.push(itemValue);
  });
}

elToggleForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  arr.push(newArr);
  console.log(arr);

  // arr.forEach((item) => {
  //   // elToggleResult.textContent = `“I drink my coffee as ${item[0]}, with a ${item[1]} type of bean. ${item[3]} groundala ${item[4]}, sent to me ${item[5]}.”`;
  // });

  arr.forEach((item) => {
    elToggleResult.innerHTML = `
      <p>
        “I drink my coffee as <mark>${item[0]}</mark>, with a <mark>${item[1]}</mark> type of bean. <mark>${item[2]}</mark> groundala <mark>${item[3]}</mark>, sent to me <mark>${item[4]}</mark>.”
      </p>
    `;
  });
});

// toggle ning ichidagi card bosilganida bg bo'yalishi
for (const wrapper of elWrapper) {
  wrapper.addEventListener("click", (evt) => {
    // evt.preventDefault();
    for (const otherWrapper of elWrapper) {
      if (otherWrapper !== wrapper) {
        otherWrapper.classList.remove("wrapper-bg");
      } else {
        wrapper.classList.toggle("wrapper-bg");
      }
    }
  });
}

// toggle title bosilganida rangi o'zgarishi
for (const title of toggleTitle) {
  title.addEventListener("click", (evt) => {
    // evt.preventDefault();
    title.classList.toggle("toggle-title");
  });
}
