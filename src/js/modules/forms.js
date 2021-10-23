import checkNumInputs from "./checkNumInputs";

const forms = (state, del) => {
  // console.log("form", state);

  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  checkNumInputs('input[name="user_phone"]');

  const loading = {
    loading: "загрузка",
    success: "Спасибо! скоро мы с вами свяжемся",
    faiture: "Что-то пошло не так...",
  };

  const formPosts = async (url, data) => {
    document.querySelector(".status").textContent = loading.loading;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const massageForm = document.createElement("div");
      massageForm.classList.add("status");
      item.appendChild(massageForm);

      const data = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          data.append(key, state[key]);
        }
      }
      const object = {};
      data.forEach((element, i) => {
        object[i] = element;
      });

      formPosts("https://jsonplaceholder.typicode.com/posts", object)
        .then((data) => {
          document.querySelector(".status").textContent = loading.success;
        })
        .catch(
          () =>
            (document.querySelector(".status").textContent = loading.faiture)
        )
        .finally(() => {
          inputs.forEach((el) => (el.value = ""));
          setTimeout(() => {
            massageForm.remove();
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup_engineer").style.display = "none";
            document.querySelector(".popup_calc_end").style.display = "none";
            document.body.style.overflow = "";

            del();
          }, 4000);
        });
    });
  });
};

export default forms;
