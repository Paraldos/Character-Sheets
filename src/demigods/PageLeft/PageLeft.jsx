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
      <Skills
        headLine="Geistig"
        skills={mentalSkills}
        svgSrc="src/assets/mental.svg"
      />
      <Skills
        headLine="Körperlich"
        skills={physicalSkills}
        svgSrc="src/assets/physical.svg"
      />
      <Skills
        headLine="Sozial"
        skills={socialSkills}
        svgSrc="src/assets/social.svg"
      />
    </div>
  );
}

export default PageLeft;
