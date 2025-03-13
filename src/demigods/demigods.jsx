import "./demigods.css";
import PageTop from "./PageTop/PageTop";

function Demigods() {
  return (
    <div className="a4-page demigods">
      <PageTop />
      <div className="bottom">
        <div className="left">
          <p>Fertigkeiten</p>
        </div>
        <div className="right">
          <p>Ausrüstung</p>
          <p>Gesundheit</p>
          <p>Essenz</p>
          <p>Notizen</p>
        </div>
      </div>
    </div>
  );
}

export default Demigods;
