import "./header.css";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

function Header() {
  return (
    <div className="header">
      <div className="header__first-line">
        <InputWithLabel labelText="Name" />
        <InputWithLabel labelText="Konzept / Motiv" />
        <InputWithLabel labelText="Stufe" />
      </div>
      <InputWithLabel
        labelText="Beschreibung / Schwächen"
        className={"header__description"}
      />
    </div>
  );
}

export default Header;
