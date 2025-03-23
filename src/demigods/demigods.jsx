import "./demigods.css";
import Page from "../page/Page";
import Header from "./Header/Header";
import Skills from "./Skills/Skills";
import BlackBox from "../generalComponents/BlackBox/BlackBox";
import PassiveValue from "./PassiveValue/PassiveValue";

function Demigods() {
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
    <Page className={"demigods"}>
      <Header />
      <div className="demigods__bottom-area">
        <div className="demigods__page-left">
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
        <div className="demigods__page-right">
          <BlackBox headline="Gepäck" />
          <PassiveValue label="Gesundheit" />
          <PassiveValue label="Essenz" />
          <BlackBox headline="Notizen" />
        </div>
      </div>
    </Page>
  );
}

export default Demigods;
