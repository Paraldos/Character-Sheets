import "./PageRight.css";
import BlackBox from "../BlackBox/BlackBox";
import PassiveValue from "../PassiveValue/PassiveValue";

function PageRight() {
  return (
    <div className="page-right">
      <BlackBox headline="Gepäck" />
      <PassiveValue label="Gesundheit" />
      <PassiveValue label="Essenz" />
      <BlackBox headline="Notizen" />
    </div>
  );
}

export default PageRight;
