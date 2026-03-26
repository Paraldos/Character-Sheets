import Page from "../page";
import "./anderswelt.css";
import Attributes from "./attributes";
import Basics from "./basics";
import Stats from "./stats";
import Inventory from "./inventory";
import Titel from "./titel";

export default class Anderswelt extends Page {
  playbooks = {
    abenteurer: {},
    soldat: {},
    pilot: {},
    detektiv: {},
    aristokrat: {},
    femFatal: {},
    ganove: {
      titel: "Ganove",
      items: [
        "Pistole",
        "Messer",
        "Schlagring",
        "Dietriche",
        "Brechstange",
        "Lampe",
        "Falsche Papiere",
        "Verkleidung",
        "Proviant",
      ],
    },
    medium: {},
    arzt: {},
  };

  constructor(container, playbook) {
    super(container, true);
    const selectedPlaybook = this.playbooks[playbook];
    this.page.classList.add("anderswelt");

    this.addColumns(3);
    new Attributes(this.columns[0]);
    new Basics(this.columns[1]);
    new Stats(this.columns[1]);
    new Inventory(this.columns[1], selectedPlaybook);
    new Titel(this.columns[2], selectedPlaybook);
  }
}
