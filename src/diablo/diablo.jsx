import "./diablo.css";
import playbooks from "./playbooks";
import Page from "../page/Page";
import BasicInfos from "./basicInfos/BasicInfos";
import Attributes from "./attributes/attributes";
import Skills from "./skills/Skills";
import PassvieValues from "./passiveValues/PassiveValues";
import Inventory from "./inventory/inventory";

import PlaybookTitle from "./playbookTitle/PlaybookTitle";
import Abilities from "./abilities/abilities";

function Diablo() {
  return (
    <>
      {playbooks.map((playbook) => (
        <Page className={"page__landscape diablo"}>
          <div className="page__left">
            <BasicInfos />
            <div className="diablo__values">
              <Attributes />
              <PassvieValues />
            </div>
            <Skills />
            <Inventory />
          </div>
          <div className="page__right">
            <PlaybookTitle playbookTitle={playbook.title} />
            <p>{playbook.description}</p>
            <Abilities title="Talente" list_of_abilities={playbook.talents} />
            <Abilities title="Manöver" list_of_abilities={playbook.manuvers} />
          </div>
        </Page>
      ))}
    </>
  );
}

export default Diablo;
