import "./skills.css";
import BlackBox from "../BlackBox/BlackBox";

function Skills({ headLine, skills }) {
  return (
    <BlackBox className="skills" headline={headLine}>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__item">
            <div className="skills__item-btn" />
            <p className="skills__item-description">{skill}</p>
            <div className="skills__item-specialization" />
            <div className="skills__item-value" />
          </li>
        ))}
      </ul>
    </BlackBox>
  );
}

export default Skills;
