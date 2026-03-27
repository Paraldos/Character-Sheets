import Page from "../page";
import "./anderswelt.css";
import Attributes from "./attributes";
import Basics from "./basics";
import Stats from "./stats";
import Inventory from "./inventory";
import Titel from "./titel";
import Talents from "./talents";

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
      description:
        "Gerissener Trickbetrüger und Dieb, der mit List und Heimlichkeit bekommt, was er will.",
      items: [
        { name: "Pistole" },
        { name: "Messer" },
        { name: "Schlagring" },
        { name: "Dietriche" },
        { name: "Brechstange" },
        { name: "Lampe" },
        { name: "Falsche Papiere" },
        { name: "Verkleidung" },
        { name: "Proviant", amount: 3 },
      ],
      talents: [
        { description: "Bert", amount: 2 },
        { description: "Bert1", amount: 1 },
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
    new Talents(this.columns[2], selectedPlaybook);
  }
}
