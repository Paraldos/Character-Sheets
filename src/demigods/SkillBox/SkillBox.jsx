import "./SkillBox.css";
import Skill from "../Skill/Skill";

function SkillBox({ headLine, skills }) {
  return (
    <div className="skill-box">
      <p className="skill-box-headline">{headLine}</p>
      <ul className="skill-box-list">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillBox;
