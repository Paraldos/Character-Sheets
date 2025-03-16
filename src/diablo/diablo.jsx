import "./diablo.css";
import Page from "../page/Page";
import LeftPage from "./leftPage/leftPage";
import RightPage from "./rightPage/RightPage";

function Diablo() {
  return (
    <Page className={"page__landscape diablo"}>
      <LeftPage>Left</LeftPage>
      <RightPage>
        <h1>Playbook Title</h1>
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
