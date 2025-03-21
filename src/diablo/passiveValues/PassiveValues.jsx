import "./passiveValues.css";
import InputWithLabel from "../../generalComponents/inputWithLabel/InputWithLabel";

function PassvieValues() {
  return (
    <ul className="passiveValues">
      <InputWithLabel labelText={"TP"} />
      <InputWithLabel labelText={"MP"} />
      <InputWithLabel labelText={"RK"} />
    </ul>
  );
}

export default PassvieValues;
