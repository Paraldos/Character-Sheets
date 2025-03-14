import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./PageTop.css";

function PageTop() {
  return (
    <div className="page-top">
      <div className="page-top__first-line">
        <InputWithLabel labelText="Name" />
        <InputWithLabel labelText="Konzept" />
        <InputWithLabel labelText="Stufe" />
      </div>

      <InputWithLabel labelText="Beschreibung" />
      <InputWithLabel labelText="Schwächen" />
    </div>
  );
}

export default PageTop;
