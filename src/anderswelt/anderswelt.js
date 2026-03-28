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
        { name: "Proviant", amount: 2 },
      ],
      talents: [
        {
          titel: "Bestienmeister",
          cost: "Einmal pro Abend",
          description:
            "Gib einem wilden Tier einen Befehl den es für den rest der Szene befolgen muss.",
        },
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
          description: "+2 auf Athletik oder Akrobatik.",
        },
        {
          titel: "Goldnase",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zu einer Ruine oder einem Schatz.",
        },
        {
          titel: "Kampfrausch",
          cost: "Stress",
          description: "+2 auf Nahkampfattacken.",
        },
        {
          titel: "Scharfschütze",
          description:
            "+2 auf Attacken mit Jagdwaffen, wenn du dich diese Runde nicht bewegst.",
        },
        {
          titel: "Scout",
          cost: "Stress",
          description: "+2 auf Orientierung, Wahrnehmung oder Wildnisleben.",
        },
        {
          titel: "Spurenleser",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zu einer Bestie, einem Tier oder einer Spur.",
        },
        {
          titel: "Zäh",
          cost: "Einmal pro Abend",
          description: "Ignoriere eingehenden Schaden.",
        },
      ],
    },
    tinkerer: {
      titel: "Bastler",
      description:
        "Genialer Mechaniker, der aus Draht und Chaos Lösungen konstruiert.",
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
            "Du erkennst mit einem Blick, wozu eine Maschine dient und wie sie ungefähr funktioniert.",
        },
        {
          titel: "Fahrer",
          description:
            "Du kannst exotische Fahrzeuge wie Flugzeuge oder U-Boote steuern.",
        },
        {
          titel: "Ingenieur",
          description: "+2 auf Handwerk und Reparaturen.",
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
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zu einem Gerät oder einer wissenschaftlichen Theorie.",
        },
      ],
    },
    charmer: {
      titel: "Charmeur",
      description:
        "Verführerischer Manipulator, der über Leichen geht, um seine Ziele zu erreichen.",
      items: [
        { name: "Messer" },
        { name: "Dietriche" },
        { name: "Gift" },
        { name: "Schlafmittel" },
        { name: "Falsche Papiere" },
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
          description: "+2 auf Einschüchtern oder Drohen.",
        },
        {
          titel: "Flinke Finger",
          cost: "Stress",
          description:
            "+2 auf Diebstahl oder Falschspiel (z.B. um Gift unterzumischen).",
        },
        {
          titel: "Gutaussehend",
          description: "+2 auf Verführen.",
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
            "Der Erzähler beantwortet 3 soziale oder politische Ja/Nein-Fragen.",
        },
        {
          titel: "Netzwerk",
          cost: "Urbane Umgebung, eine Stunde",
          description: "Du erhältst Zugang zu einem exklusiven Ort oder Kreis.",
        },
        {
          titel: "Silberzunge",
          cost: "Stress",
          description: "+2 auf Überreden, Manipulieren oder Lügen.",
        },
        {
          titel: "Entertainer",
          description: "+2 um andere zu unterhalten (z.B. Singen, Tanzen).",
        },
      ],
    },
    detective: {
      titel: "Detektiv",
      description:
        "Hartgesottener Ermittler, der stets nach der Warheit sucht.",
      items: [
        { name: "Revolver" },
        { name: "Kamera" },
        { name: "Forensik-Set" },
        { name: "Dietriche" },
        { name: "Taschenlampe" },
        { name: "(Falscher) Ausweis" },
      ],
      talents: [
        {
          titel: "Analyse",
          cost: "Stress",
          description:
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zu einem Tatort oder einem Verdächtigen.",
        },
        {
          titel: "Beschützer",
          description:
            "+2 auf Kampf und Widerstand, wenn du jemanden beschützt.",
        },
        {
          titel: "Gassenwissen",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zur kriminellen Unterwelt.",
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
            "Du treibst jemanden auf, der in der aktuellen Situation helfen kann.",
        },
        {
          titel: "Menschenkenner",
          cost: "Stress",
          description: "+2 auf Verhör oder Empathie.",
        },
        {
          titel: "Schatten",
          cost: "Stress",
          description: "+2 auf Schleiche, Beschatten oder Schmuggeln.",
        },
        {
          titel: "Spürnase",
          cost: "Stress",
          description: "+2 auf Wahrnehmung oder Ermitteln.",
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
        "Gerissener Schurke und Einbrecher, der sich auf List und Tücke verlässt.",
      items: [
        { name: "Pistole" },
        { name: "Dietriche" },
        { name: "Brecheisen" },
        { name: "Taschenlampe" },
        { name: "Falsche Papiere" },
        { name: "Verkleidung" },
      ],
      talents: [
        {
          titel: "Allerweltsgesicht",
          description: "Du wirst leicht übersehen und vergessen.",
        },
        {
          titel: "Assassine",
          description: "+1 Schaden gegen unvorbereitete Gegner.",
        },
        {
          titel: "Flinke Finger",
          cost: "Stress",
          description: "+2 auf Diebstahl oder Falschspiel.",
        },
        {
          titel: "Gassenwissen",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Der Erzähler beantwortet 3 Ja/Nein-Fragen zur kriminellen Unterwelt.",
        },
        {
          titel: "Glück",
          cost: "Einmal pro Abend",
          description: "Wiederhol Misserfolge einer Probe.",
        },
        {
          titel: "Kontakte",
          cost: "Urbane Umgebung, eine Stunde",
          description:
            "Du treibst jemanden auf, der in der aktuellen Situation helfen kann.",
        },
        {
          titel: "Lügner",
          cost: "Stress",
          description: "+2 auf Lügen oder Herausreden.",
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
          description: "+2 auf Schleiche, Beschatten oder Schmuggeln.",
        },
        {
          titel: "Schlossmeister",
          cost: "Stress",
          description: "+2 beim Schloss oder Falle knacken.",
        },
      ],
    },
    medium: {
      titel: "Medium",
      description:
        "Eine mystische Seherin, die mit Geistern spricht und verborgene Wahrheiten enthüllt.",
      items: [
        { name: "Dolch" },
        { name: "Kristallkugel" },
        { name: "Tarotkarten" },
        { name: "Pendel" },
        { name: "Drogen", amount: 3 },
      ],
      talents: [
        {
          titel: "Auspex",
          cost: "10 Minuten",
          description:
            "Der Erzähler beantwortet dir 3 Ja/Nein-Fragen zu einer Person oder einem Gegenstand.",
        },
        {
          titel: "Flüstern",
          cost: "Stress",
          description: "Sende jemandem eine kurze gedankliche Nachricht.",
        },
        {
          titel: "Geistersinn",
          cost: "Stress, Konzentration",
          description:
            "Kommuniziere mit Geistern oder nimm Übernatürliches wahr.",
        },
        {
          titel: "Jinx",
          cost: "Stress",
          description: "Das Ziel hat für einen Tag Pech.",
        },
        {
          titel: "Okkultist",
          description: "+2 auf Okkultismus, Sagen und Legenden.",
        },
        {
          titel: "Schleudern",
          cost: "Stress",
          description:
            "Telekinetischer Angriff: Verursacht normalen Schaden und schleudert das Ziel von dir weg.",
        },
        {
          titel: "Schutzkreis",
          cost: "Stress, 10 Minuten",
          description:
            "Erschaffe einen Bereich, den eine von dir bestimmte Art von Wesen nicht betreten kann.",
        },
        {
          titel: "Telekinesse",
          cost: "Stress, Konzentration",
          description: "Bewege einen kleinen Gegenstand mit deinem Geist.",
        },
        {
          titel: "Vorahnung",
          cost: "Einmal pro Abend",
          description: "Wiederhole alle Misserfolge einer Probe.",
        },
      ],
    },

    soldat: {},
    pilot: {},
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
