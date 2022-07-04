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

  if ($(window).width() < 1199) {
    burger.addEventListener("click", () => {
      block4.setAttribute(
        "style",
        "visibility:visible; display:block; height:100vh;"
      );
      for (let element of rest) {
        element.classList.add("ghost");
      }
      /*close when clicked on blurry side*/
      if (
        window.matchMedia(
          "screen and (min-width: 767px) and (max-width:1199px)"
        ).matches
      ) {
        if ($(block4).is(":visible")) {
          let profile = document.querySelector(".bottom-menu__profile");
          let imgHeight = $(window).height();
          let imgWidth = $(window).width();
          let block4Height = block4.offsetWidth;

          let img = document.createElement("img");
          img.src = "img/shrek.jpg";

          img.setAttribute(
            "style",
            `position:absolute; top:0; right:0; opacity:0;`
          );
          img.height = imgHeight;
          img.width = imgWidth - block4Height;
          document.body.appendChild(img);
          img.addEventListener("click", () => {
            block4.setAttribute("style", "visibility:hidden; display:none;");
            for (let element of rest) {
              element.classList.remove("ghost");
              element.classList.remove("ghostMain");
            }
            document.body.removeChild(img);
          });
        }
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
      element.classList.remove("ghostMain");
    }
  });
}
//feedback
{
  let rest = document.querySelectorAll(
    ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile, .wrapper1-4"
  );
  let mainContent = document.querySelectorAll(
    ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile"
  );

  let sidebar = document.querySelector(".wrapper1-4");

  let chat = document.querySelector(".bottom-menu_chat");
  let feedbackBlock = document.querySelector(".feedback__container");
  let closeFeed = document.querySelector(".feedback__close");

  chat.addEventListener("mouseover", () => {
    chat.setAttribute("style", "border: 2px solid #B8FFEC;");
  });
  chat.addEventListener("mouseleave", () => {
    chat.setAttribute("style", "border: none;");
  });

  if (window.matchMedia("screen and (min-width: 1200px)").matches) {
    chat.addEventListener("click", () => {
      feedbackBlock.setAttribute("style", "visibility:visible; display:block;");
      for (let element of rest) {
        element.classList.add("half-ghost");
      }
    });
    closeFeed.addEventListener("click", () => {
      feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
      for (let element of rest) {
        element.classList.remove("half-ghost");
      }
    });
  }
  //feedback__close

  //feedback for mobile and tablets
  else if (window.matchMedia("screen and (max-width:1199px)").matches) {
    chat.addEventListener("click", () => {
      feedbackBlock.setAttribute("style", "visibility:visible; display:block;");
      sidebar.classList.add("ghostSidebar");
    });
    closeFeed.addEventListener("click", () => {
      feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
      sidebar.classList.remove("ghostSidebar");
      for (let elem of mainContent) {
        elem.classList.add("ghostMain");
      }
    });
    //restWithoutSidebar.classList.add("ghost");
    /*     for (let element of restWithoutSidebar) {
      element.classList.add("ghost");
    } */
  }
}
//feedback call button
{
  {
    let rest = document.querySelectorAll(
      ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile, .wrapper1-4"
    );
    let restWithoutSidebar = document.querySelectorAll(
      ".upperMenu, .about, .services, .description, .wrapper-header, .labels, .swiper, .btn, .ftr, .labels__disclaimer__mobile, .labels__offer__mobile"
    );
    let call = document.querySelector(".bottom-menu__call");
    let feedbackBlock = document.querySelector(".feedback__container");
    let closeBtn = document.querySelector(".feedback__close");
    let title = document.querySelector(".feedback__title");
    let formFields = document.querySelectorAll(
      ".feedback__name, .feedback__mail, .feedback__message"
    );

    call.addEventListener("mouseover", () => {
      call.setAttribute("style", "border: 2px solid #B8FFEC;");
    });
    call.addEventListener("mouseleave", () => {
      call.setAttribute("style", "border: none;");
    });

    if (window.matchMedia("screen and (min-width: 1200px)").matches) {
      call.addEventListener("click", () => {
        feedbackBlock.setAttribute(
          "style",
          "visibility:visible; display:block;"
        );
        for (let element of rest) {
          element.classList.add("half-ghost");
        }
        title.textContent = "Заказать звонок";
        for (let form of formFields) {
          form.setAttribute("style", "display:none; visibility:hidden;");
        }
      });
      closeBtn.addEventListener("click", () => {
        feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
        for (let element of rest) {
          element.classList.remove("half-ghost");
        }
        title.textContent = "Обратная связь";
        for (let form of formFields) {
          form.setAttribute("style", "display:block; visibility:visible;");
        }
      });
    }
    //feedback__close

    //feedback for tablets
    else if (
      window.matchMedia("screen and (min-width: 767px) and (max-width:1199px)")
        .matches
    ) {
      //"screen and (min-width: 767px) and (max-width:1199px)"
      call.addEventListener("click", () => {
        feedbackBlock.setAttribute(
          "style",
          "visibility:visible; display:block;"
        );
        for (let element of rest) {
          element.classList.add("ghost");
        }
        title.textContent = "Заказать звонок";
        for (let form of formFields) {
          form.setAttribute("style", "display:none; visibility:hidden;");
        }
      });
      closeBtn.addEventListener("click", () => {
        feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
        for (let element of rest) {
          element.classList.remove("ghost");
        }
        title.textContent = "Обратная связь";
        for (let form of formFields) {
          form.setAttribute("style", "display:block; visibility:visible;");
        }
      });
    }
    //for mobile max-width: 767px
    else if (window.matchMedia("screen and (max-width:767px)").matches) {
      call.addEventListener("click", () => {
        feedbackBlock.setAttribute(
          "style",
          "visibility:visible; display:block;"
        );
        for (let element of rest) {
          element.classList.add("ghost");
        }
        title.textContent = "Заказать звонок";
        for (let form of formFields) {
          form.setAttribute("style", "display:none; visibility:hidden;");
        }
      });
      closeBtn.addEventListener("click", () => {
        feedbackBlock.setAttribute("style", "visibility:hidden; display:none;");
        for (let element of rest) {
          element.classList.remove("ghost");
        }
        title.textContent = "Обратная связь";
        for (let form of formFields) {
          form.setAttribute("style", "display:block; visibility:visible;");
        }
      });
    }
  }
}
