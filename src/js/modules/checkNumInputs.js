const checkNumInputs = (selector) => {
  const inputNumber = document.querySelectorAll(selector);

  inputNumber.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/g, "");
    });
  });
};

export default checkNumInputs;
