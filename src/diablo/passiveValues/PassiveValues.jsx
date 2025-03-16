import "./passiveValues.css";
import InputWithLabel from "../inputWithLabel/inputWithLabel";

function PassvieValues() {
  return (
    <ul className="passiveValues">
      <InputWithLabel labelText={"TP"} />
      <InputWithLabel labelText={"MP"} />
      <InputWithLabel labelText={"RK"} />
      <InputWithLabel labelText={"Vorräte"} />
    </ul>
  );
}

export default PassvieValues;
