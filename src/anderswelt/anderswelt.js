import Page from "../page";
import "./anderswelt.css";
import Basics from "./basics";
import Fertigkeiten from "./fertigkeiten";
import Maeander from "./maeander";

export default class Anderswelt extends Page {
  constructor(container) {
    super(container);
    this.page.classList.add("anderswelt");
    new Maeander(this.page);
    new Basics(this.page);
    new Maeander(this.page);

    const e = document.createElement("div");
    e.className = "anderswelt-bottom";
    this.page.appendChild(e);

    new Fertigkeiten(e);
  }
}
