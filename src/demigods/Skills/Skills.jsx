import styles from "./skills.module.css";
import BlackBox from "../../generalComponents/BlackBox/BlackBox";

function Skills({ headLine, skills, svgSrc }) {
  return (
    <BlackBox className={styles.skills} headline={headLine} svgSrc={svgSrc}>
      <ul className={styles.skills__list}>
        {skills.map((skill) => (
          <li className={styles.skills__item}>
            <div className={styles.skills__btn} />
            <p className={styles.skills__description}>{skill}</p>
            <div className={styles.skills__specialization} />
            <div className={styles.skills__value} />
          </li>
        ))}
      </ul>
    </BlackBox>
  );
}

export default Skills;
