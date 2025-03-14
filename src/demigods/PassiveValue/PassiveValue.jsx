import "./PassiveValue.css";

function PassiveValue({ label }) {
  return (
    <div className="passive-value">
      <div className="passive-value-headline">
        <p className="passive-value-label">{label}</p>
        <p className="passive-value-value"></p>
      </div>
    </div>
  );
}

export default PassiveValue;
