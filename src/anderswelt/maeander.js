import { getMaeander, getMaeanderVertical } from "./svgs";

export default class Maeander {
  constructor(container, vertical = false) {
    const e = document.createElement("div");
    e.className = "maeander";

    if (vertical) {
      e.classList.add("maeander-vertical");
      e.style.backgroundImage = getMaeanderVertical();
    } else {
      e.style.backgroundImage = getMaeander();
    }

    container.appendChild(e);
    this.element = e;
  }
}
