import "./diablo.css";
import Page from "../page/Page";
import BasicInfos from "./basicInfos/BasicInfos";
import Attributes from "./attributes/attributes";
import Skills from "./skills/Skills";

function Diablo() {
  return (
    <Page className={"page__landscape diablo"}>
      <div className="page__left">
        <BasicInfos />
        <Attributes />
        <Skills />
        <h2>Sprachen</h2>
        <h2>Ausrüstung</h2>
        <h2>Merkmale</h2>
        <ul>
          <li>TP</li>
          <li>MP</li>
          <li>RK</li>
        </ul>
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
