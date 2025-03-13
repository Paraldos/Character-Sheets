import "./Skill.css";

function Skill({ skill }) {
  return (
    <div className="skill">
      <div className="skill-awoken" />
      <p className="skill-description">{skill}</p>
      <div className="skill-specialization" />
      <div className="skill-value" />
    </div>
  );
}

export default Skill;
