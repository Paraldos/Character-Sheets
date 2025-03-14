import "./SkillBox.css";
import Skill from "../Skill/Skill";
import BlackBox from "../BlackBox/BlackBox";

function SkillBox({ headLine, skills }) {
  return (
    <BlackBox className="skill-box black-box" headline={headLine}>
      <ul className="skill-box-list">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </ul>
    </BlackBox>
  );
}

export default SkillBox;
