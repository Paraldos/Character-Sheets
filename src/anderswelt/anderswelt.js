import Page from "../page";
import "./anderswelt.css";
import Attributes from "./attributes";
import Basics from "./basics";
import Stats from "./stats";

export default class Anderswelt extends Page {
  constructor(container) {
    super(container, true);
    this.page.classList.add("anderswelt");
    this.addColumns(3);
    new Attributes(this.columns[0]);
    new Basics(this.columns[1]);
    new Stats(this.columns[1]);
  }
}
