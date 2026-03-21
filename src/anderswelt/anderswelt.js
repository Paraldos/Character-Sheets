import Page from "../page";
import "./anderswelt.css";
import "./fertigkeiten";
import Fertigkeiten from "./fertigkeiten";

export default class Anderswelt extends Page {
  constructor(container) {
    super(container);
    this.page.classList.add("anderswelt");
    this.addColumns(3);
    new Fertigkeiten(this.columns[0]);
  }
}
