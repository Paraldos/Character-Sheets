import "./attributes.css";
import InputWithLabel from "../inputWithLabel/inputWithLabel";

function Attributes() {
  const list_of_attributes = [
    "Stärke",
    "Geschick",
    "Zähigkeit",
    "Charisma",
    "Weisheit",
  ];

  return (
    <ul className="attributes">
      {list_of_attributes.map((attribute) => (
        <InputWithLabel key={attribute} labelText={attribute} />
      ))}
    </ul>
  );
}

export default Attributes;
