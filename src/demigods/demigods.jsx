import "./demigods.css";
import Page from "../page/Page";
import PageTop from "./PageTop/PageTop";
import PageCenter from "./PageCenter/PageCenter";
import PageLeft from "./PageLeft/PageLeft";
import PageRight from "./PageRight/PageRight";

function Demigods() {
  return (
    <Page className={"demigods"}>
      <PageTop />
      <PageCenter>
        <PageLeft />
        <PageRight />
      </PageCenter>
    </Page>
  );
}

export default Demigods;
