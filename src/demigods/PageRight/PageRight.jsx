import "./PageRight.css";
import Notes from "../Notes/Notes";
import Health from "../Health/Health";
import Essence from "../Essence/Essence";

function PageRight() {
  return (
    <div className="page-right">
      <Notes headline="Gepäck" />
      <Health />
      <Essence />
      <Notes headline="Notizen" />
    </div>
  );
}

export default PageRight;
