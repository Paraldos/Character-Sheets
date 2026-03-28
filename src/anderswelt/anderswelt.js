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
          description: "Du bist immun gegen Angst und Einschüchtern.",
        },
        {
          titel: "Einfallsreich",
          description: "Improvisierte Werkzeuge geben dir +2.",
        },
        {
          titel: "Fit",
          cost: "Stress",
          description: "+2 auf Athletik- oder Akrobatik-Probe.",
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
          titel: "Kampfrausch",
          cost: "Stress",
          description: "+2 auf Nahkampf Attacke-Probe.",
        },
        {
          titel: "Scharfschütze",
          description:
            "+2 auf Attacken mit Jagdwaffen, wenn du dich diese Runde nicht bewegst.",
        },
        {
          titel: "Scout",
          cost: "Stress",
          description: "+2 auf Orientierung-, Wahrnehmung- oder Wildnis-Probe.",
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
    charmer: {
      titel: "Charmeur",
      description:
        "Verführerischer Manipulator, der über Leichen geht, um seine Ziele zu erreichen.",
      items: [
        { name: "Messer" },
        { name: "Pistole" },
        { name: "Dietriche" },
        { name: "Gift" },
        { name: "Schlafmittel" },
        { name: "Falsche Papiere" },
        { name: "Bargeld", amount: 3 },
        { name: "Elegantes Outfit" },
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
          titel: "Netzwerk",
          cost: "Urbane Umgebung, eine Stunde",
          description: "Du erhältst Zugang zu einem exklusiven Ort oder Kreis.",
        },
        {
          titel: "Ruhm",
          description:
            "Du bist berühmt (wähle: Film, Musik, Mode oder Theater).",
        },
        {
          titel: "Silberzunge",
          cost: "Stress",
          description: "+2 auf Überreden-, Manipulieren- oder Lügen-Probe.",
        },
        {
          titel: "Entertainer",
          description: "+2 auf Unterhaltungs-Proben (z.B. Singen, Tanzen).",
        },
      ],
    },
    detective: {
      titel: "Detektiv",
      description:
        "Hartgesottener Ermittler, stehts auf der Suche nach der Wahrheit.",
      items: [
        { name: "Revolver" },
        { name: "Kamera" },
        { name: "Forensik-Set" },
        { name: "Dietriche" },
        { name: "Taschenlampe" },
        { name: "Handschellen" },
        { name: "(Falscher) Ausweis" },
      ],
      talents: [
        {
          titel: "Analyse",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zu einem Tatort oder einem Verdächtigen.",
        },
        {
          titel: "Beschützer",
          description:
            "+2 auf Kampf- und Widerstand-Proben, wenn du jemanden beschützt.",
        },
        {
          titel: "Gassenwissen",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zur kriminellen Unterwelt.",
        },
        {
          titel: "Gutes Gedächtnis",
          description:
            "Du kannst dich an alles erinnern, das du einmal gesehen oder gehört hast.",
        },
        {
          titel: "Kontakte",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Du kennst jemanden, der in der aktuellen Situation hilfreich sein könnte.",
        },
        {
          titel: "Menschenkenner",
          cost: "Stress",
          description: "+2 auf Verhör- oder Empathie-Probe.",
        },
        {
          titel: "Schatten",
          cost: "Stress",
          description: "+2 auf Schleichen-Probe.",
        },
        {
          titel: "Spürnase",
          cost: "Stress",
          description:
            "+2 auf Wahrnehmung-, Rätsel-lösen- oder Ermitteln-Probe.",
        },
        {
          titel: "Zweiter Wind",
          cost: "Einmal pro Abend",
          description: "Erhole dich von 1 Schaden.",
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
        { name: "Dietriche" },
        { name: "Brecheisen" },
        { name: "Taschenlampe" },
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
          titel: "Flinke Finger",
          cost: "Stress",
          description: "+2 auf Diebstahl- oder Falschspiel-Probe.",
        },
        {
          titel: "Gassenwissen",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zur kriminellen Unterwelt.",
        },
        {
          titel: "Glück",
          cost: "Einmal pro Abend",
          description: "Wiederhole alle Misserfolge einer Probe.",
        },
        {
          titel: "Kontakte",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Du kennst jemanden, der in der aktuellen Situation hilfreich sein könnte.",
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
          description: "+2 auf Schleichen-Probe.",
        },
        {
          titel: "Schlossmeister",
          cost: "Stress",
          description: "+2 auf Schlösser- oder Fallen-Probe.",
        },
      ],
    },
    tinkerer: {
      titel: "Bastler",
      description:
        "Genialer Mechaniker, der aus Draht und Chaos funktionierende Lösungen baut.",
      items: [
        { name: "Flinte" },
        { name: "Knüppel" },
        { name: "Werkzeug" },
        { name: "Ersatzteile" },
        { name: "Taschenlampe" },
        { name: "Sprengsatz" },
        { name: "Granate", amount: 2 },
      ],
      talents: [
        {
          titel: "Einfallsreich",
          description: "Improvisierte Werkzeuge geben dir +2.",
        },
        {
          titel: "Fachkenntnis",
          cost: "Stress",
          description:
            "Du erkennst mit einem Blick, wozu eine Maschine dient und wie sie funktioniert.",
        },
        {
          titel: "Fahrer",
          description:
            "Du kannst auch exotische Fahrzeuge wie Flugzeuge oder U-Boote steuern.",
        },
        {
          titel: "Ingenieur",
          description: "+2 auf Handwerk- und Reparatur-Proben.",
        },
        {
          titel: "Kaugummi und Faden",
          cost: "Einmal pro Abend",
          description: "Bringe ein defektes Gerät sofort zum Laufen.",
        },
        {
          titel: "MacGyver",
          cost: "Stress",
          description:
            "Nutze Schrott, um in wenigen Minuten eine Waffe, Sprengstoff oder Werkzeug zu improvisieren.",
        },
        {
          titel: "Scotty",
          cost: "Stress",
          description:
            "Erledige eine Reparatur in einem Bruchteil der Zeit: Wochen werden Tage, Tage werden Stunden etc.",
        },
        {
          titel: "Sprengmeister",
          cost: "Stress",
          description: "+2 im Umgang mit Sprengstoff oder Granaten.",
        },
        {
          titel: "Theorie",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zu einem Gerät oder einer wissenschaftlichen Theorie.",
        },
      ],
    },

    soldat: {},
    pilot: {},
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
