import Reveal from "reveal.js";
import hljs from "highlight.js";

import revealCss from "reveal.js/css/reveal.css";
import revealTheme from "reveal.js/css/theme/moon.css";

import hljsTheme from "highlight.js/styles/solarized-dark.css";

let slides = document.getElementsByClassName("slides")[0];

function addSlide(content) {
  let element = document.createElement("section");
  element.innerHTML = content;
  slides.appendChild(element);
}

addSlide(require("./slides/title.html"));
addSlide(require("./slides/outline.md"));
addSlide(require("./slides/about.md"));
addSlide(require("./slides/rust_history.md"));
addSlide(require("./slides/rust_design_1.md"));
addSlide(require("./slides/rust_design_2.md"));
addSlide(require("./slides/installing_rust_1.md"));
addSlide(require("./slides/installing_rust_2.md"));
addSlide(require("./slides/initializing_a_project.md"));
addSlide(require("./slides/hello_world.md"));
addSlide(require("./slides/linked_list.html"));


addSlide(require("./slides/further_reading.md"));

Reveal.initialize();
hljs.initHighlightingOnLoad();