import "./demigodsDomains.css";
import Page from "../page/Page";
import Header from "./Header/Header";
import PageLeft from "./PageLeft/PageLeft";
import PageRight from "./PageRight/PageRight";

function DemigodsDomains() {
  return (
    <Page className={"demigodsDomains"}>
      <Header />
      <div className="demigods__bottom-area">
        <PageLeft />
        <PageRight />
      </div>
    </Page>
  );
}

export default DemigodsDomains;
