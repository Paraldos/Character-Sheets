import "./BlackBox.css";

function BlackBox({ children, className, headline, svgSrc = "" }) {
  return (
    <div className={`black-box ${className}`}>
      <p className="black-box-headline">
        {headline} {svgSrc ? <img src={svgSrc} alt="" /> : ""}
      </p>
      {children}
    </div>
  );
}

export default BlackBox;
