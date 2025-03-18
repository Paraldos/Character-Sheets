import "./PageLeft.css";
import Skills from "../Skills/Skills";

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
      <Skills headLine="Geistig" skills={mentalSkills} />
      <Skills headLine="Körperlich" skills={physicalSkills} />
      <Skills headLine="Sozial" skills={socialSkills} />
    </div>
  );
}

export default PageLeft;
