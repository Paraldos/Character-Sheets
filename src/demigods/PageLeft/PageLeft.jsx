import "./PageLeft.css";
import SkillBox from "../SkillBox/SkillBox";

function PageLeft() {
  const mentalSkills = [
    "Bildung",
    "Handwerk",
    "Medizin",
    "Okkultismus",
    "Wahrnehmung",
    "Willenskraft",
  ];
  const physicalSkills = [
    "Athletik",
    "Akrobatik",
    "Fingerfertigkeit",
    "Heimlichkeit",
    "Kampf",
    "Überleben",
  ];
  const socialSkills = ["Charisma", "Kontakte", "Provozieren", "Ressourcen"];

  return (
    <div className="page-left">
      <SkillBox headLine="Geistig" skills={mentalSkills} />
      <SkillBox headLine="Körperlich" skills={physicalSkills} />
      <SkillBox headLine="Sozial" skills={socialSkills} />
    </div>
  );
}

export default PageLeft;
