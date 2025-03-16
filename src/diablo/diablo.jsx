import "./diablo.css";
import Page from "../page/Page";
import BasicInfos from "./basicInfos/BasicInfos";
import Attributes from "./attributes/attributes";
import Skills from "./skills/Skills";
import PassvieValues from "./passiveValues/PassiveValues";
import Inventory from "./inventory/inventory";

import PlaybookTitle from "./playbookTitle/PlaybookTitle";
import Abilities from "./abilities/abilities";

function Diablo() {
  const list_of_talents = [
    { description: "+2 Schaden auf Manöver" },
    { description: "+2 Permanente MP." },
    { description: "Du kannst Leichte Rüstung tragen." },
    { description: "Du kannst alle Waffen benutzen." },
  ];

  const list_of_manuvers = [
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
  ];

  return (
    <Page className={"page__landscape diablo"}>
      <div className="page__left">
        <BasicInfos />
        <div className="diablo__values">
          <Attributes />
          <PassvieValues />
        </div>
        <Skills />
        <Inventory />
      </div>
      <div className="page__right">
        <PlaybookTitle playbookTitle="Magier" />
        <p>
          Ein gelehrter der arkanen Künste, der mit reiner Willenskraft die
          Realität formen und mächtige Zauber wirken kann, dafür aber körperlich
          zerbrechlich ist.
        </p>
        <Abilities title="Talente" list_of_abilities={list_of_talents} />
        <Abilities title="Manöver" list_of_abilities={list_of_manuvers} />
      </div>
    </Page>
  );
}

export default Diablo;
