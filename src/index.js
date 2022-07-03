import * as $ from "jquery";
import "./styles/style1.3.css";
import "./styles/style1.5.css";
import "./styles/style1.4.css";

//import "./styles/styles.css";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

if (window.matchMedia("screen and (min-width: 1200px)").matches) {
  import("./styles/desktop.css").then(() => {
    console.log("desktop imported hallelujaj");
  });
}
if (window.matchMedia("screen and (max-width: 767px)").matches) {
  import("./styles/mobile.css").then(() => {
    console.log("mobile imported hallelujaj");
  });
}
if (
  window.matchMedia("screen and (min-width: 767px) and (max-width:1199px)")
    .matches
) {
  import("./styles/tablets.css").then(() => {
    console.log("tablets imported hallelujaj");
  });
}

console.log("overall  js works");

{
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    // Optional parameters

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  let button = document.querySelector("button.btn");
  //.labels__lenovo2, .labels__samsung2, .labels__apple2
  let lenovo2 = document.querySelector("img.labels__lenovo2");
  let apple2 = document.querySelector("img.labels__apple2");
  let samsung2 = document.querySelector("img.labels__samsung2");
  let expand = document.querySelector("img.btn__expand");
  let text = document.querySelector("span.btn__text");

  //setting variables for tablet version
  let viewSonic = document.querySelector("img.labels__view-sonic");
  let sony = document.querySelector("img.labels__sony");

  if ($(window).width() > 767 && $(window).width() <= 1199) {
    button.addEventListener("click", () => {
      if (text.textContent == "Скрыть") {
        lenovo2.setAttribute("style", "visibility:hidden; display:none;");
        apple2.setAttribute("style", "visibility:hidden; display:none;");
        samsung2.setAttribute("style", "visibility:hidden; display:none;");
        viewSonic.setAttribute("style", "visibility:hidden; display:none;");
        sony.setAttribute("style", "visibility:hidden; display:none;");
        expand.setAttribute("style", "transform:rotate(360deg);");
        text.textContent = "Показать все";
      } else {
        lenovo2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        apple2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        samsung2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        viewSonic.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        sony.setAttribute("style", "visibility:visible; display:inline-block;");
        expand.setAttribute("style", "transform:rotate(180deg);");
        text.textContent = "Скрыть";
      }
    });
  } else if ($(window).width() >= 1200) {
    button.addEventListener("click", () => {
      if (text.textContent == "Скрыть") {
        lenovo2.setAttribute("style", "visibility:hidden; display:none;");
        apple2.setAttribute("style", "visibility:hidden; display:none;");
        samsung2.setAttribute("style", "visibility:hidden; display:none;");
        expand.setAttribute("style", "transform:rotate(360deg);");
        text.textContent = "Показать все";
      } else {
        lenovo2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        apple2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        samsung2.setAttribute(
          "style",
          "visibility:visible; display:inline-block;"
        );
        expand.setAttribute("style", "transform:rotate(180deg);");
        text.textContent = "Скрыть";
      }
    });
  }
}

//1.4
$(".wrapper1-4").addClass("lmfao");
{
  let burger = document.querySelector(".upperMenu__burger");

  burger.addEventListener("mouseover", () => {
    burger.setAttribute("style", "border: 2px solid #B8FFEC;");
  });
  burger.addEventListener("mouseleave", () => {
    burger.setAttribute("style", "border: none;");
  });

  let block4 = document.querySelector(".wrapper1-4");

  let rest = document.querySelectorAll(
    ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile"
  );

  let body = document.body;
  let html = document.documentElement;

  if ($(window).width() < 1199) {
    burger.addEventListener("click", () => {
      block4.setAttribute(
        "style",
        "visibility:visible; display:block; height:100vh;"
      );
      for (let element of rest) {
        element.classList.add("ghost");
      }
    });
  }

  let closeBtn = document.querySelector(".upperMenu1-4__burger");

  closeBtn.addEventListener("mouseover", () => {
    closeBtn.setAttribute("style", "border: 2px solid #B8FFEC;");
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.setAttribute("style", "border: none;");
  });

  closeBtn.addEventListener("click", () => {
    block4.setAttribute("style", "visibility:hidden; display:none;");
    for (let element of rest) {
      element.classList.remove("ghost");
    }
  });
}
//feedback
{
  let rest = document.querySelectorAll(
    ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile"
  );
  let chat = document.querySelector(".bottom-menu_chat");
  let feedbackBlock = document.querySelector(".feedback__container");

  chat.addEventListener("mouseover", () => {
    chat.setAttribute("style", "border: 2px solid #B8FFEC;");
  });
  chat.addEventListener("mouseleave", () => {
    chat.setAttribute("style", "border: none;");
  });

  if (window.matchMedia("screen and (mix-width: 1200px)").matches) {
    chat.addEventListener("click", () => {
      feedbackBlock.setAttribute("style", "visibility:visible; display:block;");
      for (let element of rest) {
        element.classList.add("ghost");
      }
    });
  }
  //feedback__close
  let closeBtn = document.querySelector(".feedback__close");

  closeBtn.addEventListener("click", () => {
    feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
    for (let element of rest) {
      element.classList.remove("ghost");
    }
  });
}
