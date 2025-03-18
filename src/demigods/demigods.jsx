import "./demigods.css";
import Page from "../page/Page";
import Header from "./Header/Header";
import PageLeft from "./PageLeft/PageLeft";
import PageRight from "./PageRight/PageRight";

function Demigods() {
  return (
    <Page className={"demigods"}>
      <Header />
      <div className="demigods__bottom-area">
        <PageLeft />
        <PageRight />
      </div>
    </Page>
  );
}

export default Demigods;
