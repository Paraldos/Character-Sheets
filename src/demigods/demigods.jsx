import "./demigods.css";
import PageTop from "./PageTop/PageTop";
import PageLeft from "./PageLeft/PageLeft";

function Demigods() {
  return (
    <div className="a4-page demigods">
      <PageTop />
      <PageLeft />
      <div className="bottom">
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
