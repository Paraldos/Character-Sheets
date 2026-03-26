import Page from "../page";
import "./anderswelt.css";
import Attributes from "./attributes";

export default class Anderswelt extends Page {
  constructor(container) {
    super(container, true);
    this.page.classList.add("anderswelt");
    this.addColumns(3);
    new Attributes(this.columns[0]);
  }
}
