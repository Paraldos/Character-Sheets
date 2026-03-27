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
          description: "Improvisierte Werkzeuge geben +2 anstelle von +1.",
        },
        {
          titel: "Fit",
          cost: "Stress",
          description: "+2 auf Athletik- oder Akrobatik-Proben.",
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
          description: "+2 auf Klettern- und Balancieren-Proben.",
        },
        {
          titel: "Scharfschütze",
          description:
            "+2 auf Attacken mit Jagdwaffen, wenn du dich diese Runde nicht bewegst.",
        },
        {
          titel: "Scout",
          cost: "Stress",
          description:
            "+2 auf Orientierung-, Wahrnehmung- oder Wildnisleben-Probe.",
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
        { name: "Dietriche" },
        { name: "Elegantes Outfit" },
        { name: "Gift" },
        { name: "Schlafmittel" },
        { name: "Falsche Papiere" },
        { name: "Zigaretten" },
        { name: "Bargeld", amount: 3 },
      ],
      talents: [
        {
          titel: "Assassine",
          description: "+1 Schaden gegen unvorbereitete Gegner.",
        },
        {
          titel: "Eiskalt",
          cost: "Stress",
          description: "+2 auf Einschüchtern-Probe.",
        },
        {
          titel: "Flinke Finger",
          cost: "Stress",
          description:
            "+2 auf Diebstahl- oder Falschspiel-Probe (z.B. um Gift unterzumischen).",
        },
        {
          titel: "Gutaussehend",
          description: "+2 auf Verführen-Proben.",
        },
        {
          titel: "Harmlos",
          description:
            "Du wirst generell unterschätzt und im Kampf nur attackiert, wenn kein anderes Ziel zur Verfügung steht.",
        },
        {
          titel: "Klatsch",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortet dir 3 soziale oder politische Ja/Nein-Fragen.",
        },
        {
          titel: "Kontakte",
          cost: "Urbane Umgebung, eine Stunde",
          description: "Du treibst jemanden auf, der helfen kann.",
        },
        {
          titel: "Netzwerk",
          cost: "Urbane Umgebung, eine Stunde",
          description: "Du erhältst Zugang zu einem exklusiven Ort oder Kreis.",
        },
        {
          titel: "Silberzunge",
          cost: "Stress",
          description: "+2 auf Überreden-, Manipulieren- oder Lügen-Probe.",
        },
        {
          titel: "Entertainer",
          cost: "Stress",
          description:
            "+2 auf Unterhaltungsproben (Singen, Tanzen etc.). Hält für eine Szene.",
        },
      ],
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
          titel: "Allerweltsgesicht",
          description:
            "Du wirst meist ignoriert und bleibst kaum in Erinnerung.",
        },
        {
          titel: "Assassine",
          description: "+1 Schaden gegen unvorbereitete Gegner.",
        },
        {
          titel: "Fasttalker",
          cost: "Stress",
          description: "+2 auf Lügen- oder Herausreden-Probe.",
        },
        {
          titel: "Finte",
          cost: "Stress",
          description: "+2 auf Attacke-Probe.",
        },
        {
          titel: "Flinke Finger",
          cost: "Stress",
          description: "+2 auf Diebstahl- oder Falschspiel-Probe.",
        },
        {
          titel: "Gassenwissen",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortert dir 3 Ja/Nein-Fragen zur kriminellen Unterwelt.",
        },
        {
          titel: "Glück",
          cost: "Einmal pro Abend",
          description: "Wiederhole alle Misserfolge einer Probe.",
        },
        {
          titel: "Kontakte",
          cost: "Urbane Umgebung, eine Stunde",
          description: "Du treibst jemanden auf, der helfen kann.",
        },
        {
          titel: "Rauchbombe",
          cost: "Aktion, Stress",
          description:
            "Umstehende Gegner sind verwirrt und müssen eine Runde aussetzen.",
        },
        {
          titel: "Schatten",
          cost: "Stress",
          description:
            "+2 auf Heimlichkeit. Hält solange du dich unauffällig verhältst.",
        },
        {
          titel: "Schlossmeister",
          cost: "Stress",
          description: "+2 auf Schlösser- oder Fallen-Proben.",
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
