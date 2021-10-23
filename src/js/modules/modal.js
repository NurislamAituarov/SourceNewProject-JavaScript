const modal = (modalState) => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const window = document.querySelectorAll("[data-modal]");

    trigger.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.target ? e.preventDefault() : null;
        // console.log(modalState);
        if (closeClickOverlay) {
          window.forEach((item) => {
            item.style.display = "none";
          });
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        } else {
          if (modalState.height && modalState.width) {
            window.forEach((item) => {
              item.style.display = "none";
            });
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
          }
        }
      });
    });

    close.addEventListener("click", () => {
      window.forEach((item) => {
        item.style.display = "none";
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        window.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyP" || e.code === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  function showModalTimer(selector, ms) {
    const modal = document.querySelector(selector);
    setTimeout(() => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }, ms);
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  showModalTimer(".popup", 10000);
};

export default modal;
