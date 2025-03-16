import "./diablo.css";
import Page from "../page/Page";
import BasicInfos from "./basicInfos/BasicInfos";
import Attributes from "./attributes/attributes";
import Skills from "./skills/Skills";
import PassvieValues from "./passiveValues/PassiveValues";
import Inventory from "./inventory/inventory";

import PlaybookTitle from "./playbookTitle/PlaybookTitle";

function Diablo() {
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
        <p>Playbook Description</p>
        <h2>Talente</h2>
        <ul>
          <li>Talent 1</li>
          <li>Talent 2</li>
          <li>Talent 3</li>
        </ul>
        <h2>Manöver</h2>
        <ul>
          <li>Manöver 1</li>
          <li>Manöver 2</li>
          <li>Manöver 3</li>
        </ul>
      </div>
    </Page>
  );
}

export default Diablo;
