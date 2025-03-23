import "./demigodsDomains.css";
import Page from "../page/Page";
import Header from "./Header/Header";
import BlackBox from "../generalComponents/BlackBox/BlackBox";
import PassiveValue from "./PassiveValue/PassiveValue";

function DemigodsDomains() {
  return (
    <Page className={"demigodsDomains"}>
      <Header />
      <div className="demigods__bottom-area">
        <div className="demigods__page-left">Bert</div>
        <div className="demigods__page-right">
          <BlackBox headline="Gepäck" />
          <PassiveValue label="Gesundheit" />
          <PassiveValue label="Essenz" />
          <BlackBox headline="Notizen" />
        </div>
      </div>
    </Page>
  );
}

export default DemigodsDomains;
