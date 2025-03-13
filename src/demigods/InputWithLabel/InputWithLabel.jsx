import "./InputWithLabel.css";

function InputWithLabel({ labelText, extraClassName }) {
  return (
    <div className={"input-with-label " + extraClassName}>
      <input id="input" type="text" />
      <label htmlFor="input">{labelText}</label>
    </div>
  );
}

export default InputWithLabel;
