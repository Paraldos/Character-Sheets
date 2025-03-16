import "./BasicInfos.css";

function BasicInfos() {
  const list_of_baisc_infos = ["Name", "Rasse", "Hintergrund", "Gesinnung"];

  return (
    <ul className="basicInfos">
      {list_of_baisc_infos.map((info) => (
        <li>
          <input type="text"></input>
          <label>{info}</label>
        </li>
      ))}
    </ul>
  );
}

export default BasicInfos;
