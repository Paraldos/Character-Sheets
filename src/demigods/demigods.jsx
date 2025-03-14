import "./demigods.css";
import PageTop from "./PageTop/PageTop";
import PageCenter from "./PageCenter/PageCenter";
import PageLeft from "./PageLeft/PageLeft";
import PageRight from "./PageRight/PageRight";

function Demigods() {
  return (
    <div className="a4-page demigods">
      <PageTop />
      <PageCenter>
        <PageLeft />
        <PageRight />
      </PageCenter>
    </div>
  );
}

export default Demigods;
