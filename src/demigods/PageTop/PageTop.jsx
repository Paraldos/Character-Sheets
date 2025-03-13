import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./PageTop.css";

function PageTop() {
  return (
    <div className="page-top">
      <InputWithLabel labelText="Name" />
      <InputWithLabel labelText="Konzept" />
      <InputWithLabel labelText="Beschreibung" />
      <InputWithLabel labelText="Schwächen" />
    </div>
  );
}

export default PageTop;
