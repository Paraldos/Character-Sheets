import "./diablo.css";
import Page from "../page/Page";
import LeftPage from "./leftPage/leftPage";
import RightPage from "./rightPage/RightPage";

function Diablo() {
  return (
    <Page className={"page__landscape diablo"}>
      <LeftPage>Left</LeftPage>
      <RightPage>Right</RightPage>
    </Page>
  );
}

export default Diablo;
