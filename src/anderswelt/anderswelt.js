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
    new Fertigkeiten(this.page);
    new Maeander(this.page);
  }
}
