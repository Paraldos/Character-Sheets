import "./PageRight.css";
import Notes from "../Notes/Notes";
import PassiveValue from "../PassiveValue/PassiveValue";

function PageRight() {
  return (
    <div className="page-right">
      <Notes headline="Gepäck" />
      <PassiveValue label="Gesundheit" />
      <PassiveValue label="Essenz" />
      <Notes headline="Notizen" />
    </div>
  );
}

export default PageRight;
