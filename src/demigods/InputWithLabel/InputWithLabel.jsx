import "./InputWithLabel.css";

function InputWithLabel({ labelText, className }) {
  return (
    <div className={`input-with-label ${className}`}>
      <input id="input" type="text" />
      <label htmlFor="input">{labelText}</label>
    </div>
  );
}

export default InputWithLabel;
