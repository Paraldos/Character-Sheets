import "./attributes.css";

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
        <li key={attribute}>
          <input type="text" />
          <label>{attribute}</label>
        </li>
      ))}
    </ul>
  );
}

export default Attributes;
