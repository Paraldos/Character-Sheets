import "./InputWithLabel.css";

function InputWithLabel({ labelText, className }) {
  return (
    <div className={`input-with-label ${className}`}>
      <input type="text" />
      <label>{labelText}</label>
    </div>
  );
}

export default InputWithLabel;
