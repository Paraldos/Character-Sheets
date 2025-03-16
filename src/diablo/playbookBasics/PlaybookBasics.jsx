import "./playbookBasics.css";

function PlaybookBasics({ playbook }) {
  return (
    <div className="playbook-basics">
      <p>
        <span>Rüstungen</span>: {playbook.basics.rüstungen.join(", ")}
      </p>
      <p>
        <span>Waffen</span>: {playbook.basics.waffen.join(", ")}
      </p>
    </div>
  );
}

export default PlaybookBasics;
