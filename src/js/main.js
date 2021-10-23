import "./modules/slider";
import modal from "./modules/modal";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  let deadline = "2021-10-25";

  function deleteModalState() {
    modalState = {};
  }

  changeModalState(modalState);

  modal(modalState);

  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img > img",
    "do_image_more",
    "inline-block"
  );

  function del() {
    deleteModalState();
    forms(modalState, del);
    console.log(modalState);
  }
  forms(modalState, del);
  timer(".container1", deadline);
});
