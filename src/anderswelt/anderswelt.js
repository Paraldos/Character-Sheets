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
        {
          titel: "Ablenken",
          cost: "Aktion, Stress",
          description: "Ziel ist exponiert. +2 auf Attacken für eine Runde.",
        },
        {
          titel: "Allerweltsgesicht",
          description:
            "Du wirst meist ignoriert und bleibst kaum in Erinnerung.",
        },
        {
          titel: "Assassine",
          description: "2 Schaden gegen abgelenkte oder unvorbereitete Gegner.",
        },
        {
          titel: "Fasttalker",
          cost: "Stress",
          description: "+2 auf eine Probe zum Lügen oder Herausreden.",
        },
        {
          titel: "Finte",
          cost: "Aktion, Stress",
          description: "Führe eine Attacke mit +2 aus.",
        },
        {
          titel: "Flinke Finger",
          cost: "Stress",
          description: "+2, um Schloss oder Falle in Sekunden zu knacken.",
        },
        {
          titel: "Glück",
          cost: "Einmal pro Abend",
          description: "Wiederhole alle Misserfolge einer Probe.",
        },
        {
          titel: "Kontakte",
          cost: "Einmal pro Abend",
          description: "Du kennst hier jemanden, der helfen kann.",
        },
        {
          titel: "Rauchbombe",
          cost: "Aktion, Stress",
          description: "Für eine Runde unsichtbar.",
        },
        {
          titel: "Schatten",
          cost: "Stress",
          description: "+2 auf Heimlichkeit, solange du unauffällig bist.",
        },
        {
          titel: "Trickster",
          cost: "Stress",
          description:
            "+2 auf eine Probe für Diebstahl, Falschspiel oder Tricks.",
        },
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
