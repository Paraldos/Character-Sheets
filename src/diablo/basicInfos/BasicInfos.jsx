import "./BasicInfos.css";
import InputWithLabel from "../inputWithLabel/inputWithLabel";

function BasicInfos() {
  const list_of_baisc_infos = ["Name", "Rasse", "Hintergrund", "Gesinnung"];

  return (
    <ul className="basicInfos">
      {list_of_baisc_infos.map((info) => (
        <InputWithLabel key={info} labelText={info} />
      ))}
    </ul>
  );
}

export default BasicInfos;
