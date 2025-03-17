import "./inventory.css";

function Inventory() {
  const list_of_slots = Array.from({ length: 12 });

  return (
    <div className="inventory">
      <h3>Gepäck (max. 5 + Stärke)</h3>
      <ul>
        {list_of_slots.map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
