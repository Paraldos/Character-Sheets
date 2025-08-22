import "./boldLegends.css";
import Page from "../Page/Page.jsx";
import InputWithLabel from "../generalComponents/inputWithLabel/InputWithLabel.jsx";

function BoldLegends() {
  return (
    <Page className={"boldLegends"}>
      <div>
        <h1>
          <span>Bold Legends</span>
        </h1>
        <InputWithLabel labelText="Name" />
        <InputWithLabel labelText="Konzept / Motive" />
        <InputWithLabel labelText="EP" />
        <InputWithLabel labelText="Stufe" />
        <InputWithLabel labelText="Schwächen" />
        <div>
          <InputWithLabel labelText="Stärke" />
          <InputWithLabel labelText="Geschick" />
          <InputWithLabel labelText="Klugheit" />
          <InputWithLabel labelText="Charisma" />
          <InputWithLabel labelText="Wissen" />
        </div>
        <div>
          <h2>Ausrüstung</h2>
        </div>
        <div>
          <h2>Kräfte</h2>
        </div>
        <div className="wunden">
          <h2>Wunden</h2>
          <div className="wunde" />
          <div className="wunde" />
          <div className="wunde" />
        </div>
      </div>
      <div>
        <h2>Notizen</h2>
      </div>
    </Page>
  );
}

export default BoldLegends;
