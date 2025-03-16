import "./PlaybookTitle.css";

function PlaybookTitle({ playbookTitle = "Test" }) {
  return (
    <div className="playbookTitle">
      <h1>{playbookTitle}</h1>
      <p>Stufe</p>
      <div></div>
    </div>
  );
}

export default PlaybookTitle;
