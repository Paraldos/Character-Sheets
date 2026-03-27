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
    abenteurer: {
      titel: "Abenteurer",
      description:
        "Todesmutiger Entdecker auf der Jagd nach Schätzen und Ruhm.",
      items: [
        { name: "Revolver" },
        { name: "Gewehr" },
        { name: "Machete" },
        { name: "Kletterset" },
        { name: "Karte & Kompass" },
        { name: "Feldstecher" },
        { name: "Fackel", amount: 3 },
        { name: "Proviant", amount: 5 },
      ],
      talents: [
        {
          titel: "Draufgänger",
          description: "Du bist immun gegen Angst oder Einschüchtern.",
        },
        {
          titel: "Einfallsreich",
          cost: "Stress",
          description:
            "Improvisierte Werkzeuge geben dir einen +2 Bonus (anstelle von +1)",
        },
        {
          titel: "Fit",
          cost: "Stress",
          description: "+2 auf eine Athletik- oder Akrobatikprobe.",
        },
        {
          titel: "Goldnase",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zu einer Ruine oder einem Schatz.",
        },
        {
          titel: "Jäger",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zu einer Bestie, einem Tier oder einer Spur.",
        },
        {
          titel: "Kletteraffe",
          description: "+2 auf Klettern und Balancieren.",
        },
        {
          titel: "Scharfschütze",
          description:
            "+2 auf Attacken mit Jagdwaffen, wenn du dich nicht bewegst.",
        },
        {
          titel: "Scout",
          cost: "Stress",
          description:
            "Erhalte +2 auf eine Probe für Orientierung, Wahrnehmung oder Wildnisleben.",
        },
        {
          titel: "Zäh",
          cost: "Einmal pro Abend",
          description: "Ignoriere eingehenden Schaden.",
        },
        {
          titel: "Zweiter Wind",
          cost: "Einmal pro Abend",
          description: "Erhole dich von 1 Schaden.",
        },
      ],
    },
    soldat: {},
    pilot: {},
    detektiv: {},
    aristokrat: {},
    charmer: {
      titel: "Charmeur",
      description:
        "Verführerischer Manipulator, der über Leichen geht, um seine Ziele zu erreichen.",
      items: [
        { name: "Pistole" },
        { name: "Gift" },
        { name: "Elegantes Outfit" },
        { name: "Dietriche" },
        { name: "Falsche Papiere" },
        { name: "Zigaretten" },
        { name: "Bargeld", amount: 3 },
      ],
      talents: [],
    },
    ganove: {
      titel: "Ganove",
      description:
        "Gerissener Trickbetrüger und Dieb, der mit List bekommt, was er will.",
      items: [
        { name: "Pistole" },
        { name: "Schlagring" },
        { name: "Messer" },
        { name: "Dietriche" },
        { name: "Brechstange" },
        { name: "Lampe" },
        { name: "Falsche Papiere" },
        { name: "Verkleidung" },
        { name: "Bargeld" },
      ],
      talents: [
        {
          titel: "Ablenken",
          cost: "Aktion, Stress",
          description: "Alle attacken gegen Ziel erhalten für eine Runde +2.",
        },
        {
          titel: "Allerweltsgesicht",
          description:
            "Du wirst meist ignoriert und bleibst kaum in Erinnerung.",
        },
        {
          titel: "Assassine",
          description:
            "+1 Schaden gegen abgelenkte oder unvorbereitete Gegner.",
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
          cost: "Einmal pro Abend, Urbane Umgebung",
          description: "Du kennst hier jemanden, der helfen kann.",
        },
        {
          titel: "Rauchbombe",
          cost: "Aktion, Stress",
          description: "Umstehende Gegner müssen eine Runde aussetzen.",
        },
        {
          titel: "Schatten",
          cost: "Stress",
          description:
            "+2 auf Heimlichkeit. Hält solange du unauffällig bleibst.",
        },
        {
          titel: "Trickser",
          cost: "Stress",
          description: "+2 auf eine Diebstahl oder Falschspiel Probe.",
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
