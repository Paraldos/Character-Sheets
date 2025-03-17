import "./playbookBasics.css";

function PlaybookBasics({ playbook }) {
  return (
    <div className="playbook-basics">
      <p>
        <span>Max. TP</span>: {playbook.basics.maxTP} / <span>Max. MP</span>:{" "}
        {playbook.basics.maxMP} / <span>Fertigkeiten</span>:{" "}
        {playbook.basics.fertigkeiten}
      </p>
      <p>
        <span>Rüstungen</span>: {playbook.basics.rüstungen.join(", ")} /{" "}
        <span>Waffen</span>: {playbook.basics.waffen.join(", ")}
      </p>
    </div>
  );
}

export default PlaybookBasics;
