import "./BasicInfos.css";
import InputWithLabel from "../../generalComponents/inputWithLabel/InputWithLabel";

function BasicInfos() {
  const list_of_baisc_infos = ["Name", "Rasse", "Hintergrund", "Gesinnung"];

  return (
    <div className="basicInfos">
      <ul>
        {list_of_baisc_infos.map((info) => (
          <InputWithLabel key={info} labelText={info} />
        ))}
      </ul>
      <InputWithLabel labelText="Sprachen" />
    </div>
  );
}

export default BasicInfos;
