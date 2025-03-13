import "./PageLeft.css";
import SkillBox from "../SkillBox/SkillBox";

function PageLeft() {
  const mentalSkills = ["Bildung", "Handwerk", "Medizin", "Wahrnehmung"];
  const physicalSkills = [
    "Diebstahl",
    "Geschick",
    "Heimlichkeit",
    "Kampf",
    "Kraft",
    "Überleben",
    "Zähigkeit",
  ];
  const socialSkills = ["Charisma", "Provozieren", "Kontakte", "Ressourcen"];
  const supernaturalSkills = ["Mystik", "Nekromantie", "Urkraft"];

  return (
    <div className="page-left">
      <SkillBox headLine="Geistig" skills={mentalSkills} />
      <SkillBox headLine="Körperlich" skills={physicalSkills} />
      <SkillBox headLine="Sozial" skills={socialSkills} />
      <SkillBox headLine="Übernatürlich" skills={supernaturalSkills} />
    </div>
  );
}

export default PageLeft;
