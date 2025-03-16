const fighter = {
  title: "Krieger",
  description:
    "Ein Meister des bewaffneten Kampfes, der mit Entschlossenheit, Taktik und Ausdauer jede Schlacht dominiert, sei es mit Schwert, Axt oder Schild.",
  talents: [
    { description: "+1 Permanente RK." },
    { description: "+4 Permanente TP." },
    { description: "+1 Attacke und Schaden im Nahkampf." },
    { description: "+1 Attacke und Schaden im Fernkampf." },
    {
      description:
        "Fernkampf Attacke mit 19 und 20 zählen als kritischer Treffer.",
    },
    {
      description:
        "Nahkampf Attacke mit 19 und 20 zählen als kritischer Treffer.",
    },
  ],
  manuvers: [
    {
      title: "Ausfall",
      description: "Aktion / Attacke mit Vorteil.",
    },
    {
      title: "Defensive",
      description: "Bewegung / +2 RK für eine Runde.",
    },
    {
      title: "Kriegsschrei",
      description:
        "Aktion oder Bewegung / Verbündete erhalten für eine Runde einen Vorteil auf Attacken.",
    },
    {
      title: "Rage",
      description:
        "Aktion oder Bewegung / +1 auf Attacke und Schaden. Hält, bis der aktuelle Konflikt beendet ist.",
    },
    {
      title: "Rundumschlag",
      description: "Aktion / Attackier bis zu drei Gegner in Reichweite.",
    },
    {
      title: "Wuchtschlag",
      description: "Aktion / Würfel normale Attacke. Bei Treffer +2W6 Schaden.",
    },
  ],
};

const mage = {
  title: "Magier",
  description:
    "Ein gelehrter der arkanen Künste, der mit reiner Willenskraft die Realität formen und mächtige Zauber wirken kann, dafür aber körperlich zerbrechlich ist.",
  talents: [
    { description: "+2 Schaden auf Manöver" },
    { description: "+2 Permanente MP." },
    { description: "Du kannst Leichte Rüstung tragen." },
    { description: "Du kannst alle Waffen benutzen." },
  ],
  manuvers: [
    {
      title: "Analyse",
      description:
        "Aktion / Erzähler beantwortet dir drei Ja/Nein Fragen zu einem Ort, Objekt oder einer Person.",
    },
    {
      title: "Geschoss",
      description:
        "Aktion / 3W6 Schaden auf Distanz. Jeder Schadenswürfel kann ein anderes Ziel treffen.",
    },
    {
      title: "Explosion",
      description:
        "Aktion / Jeder in einem 3m Bereich erleidet 3W6 + WE Schaden.",
    },
    {
      title: "Levitation",
      description:
        "Aktion oder Bewegung / Du kannst für eine Szene durch die Luft schweben.",
    },
    {
      title: "Licht",
      description:
        "Aktion / Ein Gegenstand leuchtet für eine Stunde (Realzeit) hell wie eine Fackel.",
    },
    {
      title: "Teleport",
      description:
        "Aktion oder Bewegung / Versetzt dich an einen Ort, den du sehen kannst oder in den letzten 24 Stunden besucht hast.",
    },
    {
      title: "Telekinese",
      description: "Aktion / Bewege ein Objekt (max. 500kg) mit Gedankenkraft.",
    },
    {
      title: "Zauberrüstung",
      description: "Aktion oder Bewegung / Du erhältst für eine Szene +4 RK.",
    },
  ],
};

const priest = {
  title: "Priester",
  description:
    "Ein göttlicher Streiter, der mit heiligen Kräften heilen, schützt oder im Namen seiner Gottheit Zerstörung bringen kann. Er vereint Kampf und Magie.",
  basics: {
    maxTP: "14 + Zähigkeit + Stufe",
    maxMP: "5 + Stufe",
    fertigkeiten: 3,
    rüstungen: ["Leichte Rüstung", "Mittlere Rüstung", "Schild"],
    waffen: ["Einfache Waffen"],
  },
  talents: [
    { description: "+1 Permanente RK." },
    { description: "+4 Permanente TP." },
    { description: "+2 Schaden gegen Dämonen und Untote." },
    { description: "+2 Permanente MP." },
    { description: "Du kannst alle Waffen benutzen." },
  ],
  manuvers: [
    {
      title: "Heilen",
      description: "Aktion / Verbündeter erholt sich von 2W6 + WE Schaden.",
    },
    {
      title: "Niederstrecken",
      description:
        "Aktion / Würfel normale Attacke. Bei Treffer +2W6 Heiligen Schaden.",
    },
    {
      title: "Licht",
      description:
        "Aktion / Ein Gegenstand leuchtet für eine Stunde (Realzeit) hell wie eine Fackel.",
    },
    {
      title: "Segen",
      description:
        "Aktion oder Bewegung / Verbündete erhalten Vorteil auf nächste Probe.",
    },
    {
      title: "Untote Vertreiben",
      description: "Aktion / Untote müssen für eine Runde vor dir fliehen.",
    },
    {
      title: "Waffensegen",
      description:
        "Aktion / Du oder Verbündeter erhält +1 Attacke und Schaden. Hält, bis der aktuelle Konflikt beendet ist.",
    },
  ],
};

const rogue = {
  title: "Schurke",
  description:
    "Ein gewandter Trickser und Schattenkrieger, der sich auf Heimlichkeit und Geschicklichkeit verlässt, um Feinde aus dem Hinterhalt auszuschalten.",
  basics: {
    maxTP: "14 + Zähigkeit + Stufe",
    maxMP: "4 + Stufe",
    fertigkeiten: 4,
    rüstungen: ["Leichte Rüstung", "Schild"],
    waffen: ["Einfache Waffen"],
  },
  talents: [
    { description: "+1 Attacke und Schaden im Nahkampf." },
    { description: "+1 Attacke und Schaden im Fernkampf." },
    { description: "+2 Permanente RK." },
    { description: "+2W6 Schaden bei Attacken aus dem Hinterhalt." },
  ],
  manuvers: [
    {
      title: "Ausweichen",
      description: "Aktion oder Bewegung / +4 RK für eine Runde.",
    },
    {
      title: "Finte",
      description: "Aktion / Attacke mit Vorteil.",
    },
    {
      title: "Fiese Tricks",
      description: "Aktion / Würfel normale Attacke. Bei Treffer +2W6 Schaden.",
    },
    {
      title: "Flinke Finger",
      description:
        "Aktion / Versuch ein Schloss zu knacken dauert nur eine Aktion.",
    },
    {
      title: "Rauchbombe",
      description:
        "Aktion / Gegner in Nahkampfreichweite müssen eine Runde aussetzen (max. einmal pro Kampf).",
    },
    {
      title: "Verschwinden",
      description: "Aktion / Du wirst für eine Runde unsichtbar.",
    },
  ],
};

const playbooks = [fighter, mage, priest, rogue];
export default playbooks;
