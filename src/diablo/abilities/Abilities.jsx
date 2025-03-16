import "./abilities.css";

function Abilities({ title, list_of_abilities }) {
  return (
    <div className="abilities">
      <h3>{title}</h3>
      <ul>
        {list_of_abilities.map((abilitie, index) => (
          <li key={index}>
            <p>
              {abilitie.title && <span>{abilitie.title}</span>}
              {abilitie.title ? ": " : ""}
              {abilitie.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Abilities;
