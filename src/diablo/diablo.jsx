import "./diablo.css";
import Page from "../page/Page";
import LeftPage from "./leftPage/leftPage";
import RightPage from "./rightPage/RightPage";
import Attributes from "./attributes/attributes";
import BasicInfos from "./basicInfos/BasicInfos";

function Diablo() {
  return (
    <Page className={"page__landscape diablo"}>
      <LeftPage>
        <BasicInfos />
        <h2>Attribute</h2>
        <Attributes />
        <h2>Fertigkeiten</h2>
        <ul>
          <li>Fertigkeit 1</li>
          <li>Fertigkeit 2</li>
          <li>Fertigkeit 3</li>
          <li>Fertigkeit 4</li>
          <li>Fertigkeit 5</li>
          <li>Fertigkeit 6</li>
        </ul>
        <h2>Sprachen</h2>
        <h2>Ausrüstung</h2>
        <h2>Merkmale</h2>
        <ul>
          <li>TP</li>
          <li>MP</li>
          <li>RK</li>
        </ul>
      </LeftPage>
      <RightPage>
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
      </RightPage>
    </Page>
  );
}

export default Diablo;
