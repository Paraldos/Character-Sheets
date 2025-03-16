import "./diablo.css";
import Page from "../page/Page";
import BasicInfos from "./basicInfos/BasicInfos";
import Attributes from "./attributes/attributes";
import Skills from "./skills/Skills";
import PassvieValues from "./passiveValues/PassiveValues";
import InputWithLabel from "./inputWithLabel/inputWithLabel";

function Diablo() {
  return (
    <Page className={"page__landscape diablo"}>
      <div className="page__left">
        <BasicInfos />
        <Attributes />
        <PassvieValues />
        <Skills />
        <h2>Ausrüstung</h2>
      </div>
      <div className="page__right">
        <h1>Playbook Title + Stufe</h1>
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
