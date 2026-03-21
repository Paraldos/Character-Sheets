import { getMaeanderDataUrl } from "./svgs";

export default class Maeander {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "maeander";
    e.style.backgroundImage = getMaeanderDataUrl();

    container.appendChild(e);
    this.element = e;
  }
}
