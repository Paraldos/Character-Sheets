import "./PageRight.css";
import Tools from "../Tools/Tools";
import Health from "../Health/Health";
import Essence from "../Essence/Essence";
import Notes from "../Notes/Notes";

function PageRight() {
  return (
    <div className="page-right">
      <Tools />
      <Health />
      <Essence />
      <Notes />
    </div>
  );
}

export default PageRight;
