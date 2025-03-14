import "./Notes.css";
import BlackBox from "../BlackBox/BlackBox";

function Tools({ headline, amountOfLines = 5 }) {
  const lines = Array.from({ length: amountOfLines });

  return (
    <BlackBox className="notes" headline={headline}>
      <ul className="notes-list">
        {lines.map((index) => (
          <li key={index} className="notes-list-item" />
        ))}
      </ul>
    </BlackBox>
  );
}

export default Tools;
