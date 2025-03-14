import "./BlackBox.css";

function BlackBox({ children, className, headline }) {
  return (
    <div className={`black-box ${className}`}>
      <p className="black-box-headline">{headline}</p>
      {children}
    </div>
  );
}

export default BlackBox;
