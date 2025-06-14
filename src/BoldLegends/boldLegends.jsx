import "./boldLegends.css";
import Page from "../Page/Page.jsx";
import InputWithLabel from "../generalComponents/inputWithLabel/InputWithLabel.jsx";

function BoldLegends() {
  return (
    <Page className={"boldLegends"}>
      <div >
        <h1>
          <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M275.602,346.18c0-155.063,47.628-176.776,47.628-238.215c0-54.614-38.926-93.177-67.23-107.964 c-28.305,14.788-67.239,53.351-67.239,107.964c0,61.44,47.628,83.152,47.628,238.215H275.602z"></path> <path class="st0" d="M185.388,346.18h31.359c0,0,6.547-141.584-81.028-161.194c-90.055-20.155-128.082,107.178-57.51,149 C84.75,239.886,185.388,246.418,185.388,346.18z"></path> <path class="st0" d="M376.278,184.985c-87.567,19.61-81.036,161.194-81.036,161.194h31.367 c0-99.762,100.638-106.294,107.178-12.194C504.367,292.163,466.332,164.83,376.278,184.985z"></path> <polygon class="st0" points="131.833,356.204 131.833,386.262 255.999,386.262 380.171,386.262 380.171,356.204 255.999,356.204 "></polygon> <path class="st0" d="M278.217,395.674h-44.445c0,18.303-23.519,50.977-60.118,52.278c0,22.226,42.956,29.196,57.857,19.611 c0,0-1.656,33.982,24.487,44.437c26.142-10.456,24.487-44.437,24.487-44.437c14.901,9.585,57.856,2.616,57.856-19.611 C301.744,446.652,278.217,413.977,278.217,395.674z"></path> </g> </g></svg>
          <span>Bold Legends</span>
          <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M275.602,346.18c0-155.063,47.628-176.776,47.628-238.215c0-54.614-38.926-93.177-67.23-107.964 c-28.305,14.788-67.239,53.351-67.239,107.964c0,61.44,47.628,83.152,47.628,238.215H275.602z"></path> <path class="st0" d="M185.388,346.18h31.359c0,0,6.547-141.584-81.028-161.194c-90.055-20.155-128.082,107.178-57.51,149 C84.75,239.886,185.388,246.418,185.388,346.18z"></path> <path class="st0" d="M376.278,184.985c-87.567,19.61-81.036,161.194-81.036,161.194h31.367 c0-99.762,100.638-106.294,107.178-12.194C504.367,292.163,466.332,164.83,376.278,184.985z"></path> <polygon class="st0" points="131.833,356.204 131.833,386.262 255.999,386.262 380.171,386.262 380.171,356.204 255.999,356.204 "></polygon> <path class="st0" d="M278.217,395.674h-44.445c0,18.303-23.519,50.977-60.118,52.278c0,22.226,42.956,29.196,57.857,19.611 c0,0-1.656,33.982,24.487,44.437c26.142-10.456,24.487-44.437,24.487-44.437c14.901,9.585,57.856,2.616,57.856-19.611 C301.744,446.652,278.217,413.977,278.217,395.674z"></path> </g> </g></svg>
        </h1>
        <InputWithLabel labelText='Name' />
        <InputWithLabel labelText='Konzept / Motive' />
        <InputWithLabel labelText='EP' />
        <InputWithLabel labelText='Stufe' />
        <InputWithLabel labelText='Schwächen' />
        <div>
          <InputWithLabel labelText='Stärke' />
          <InputWithLabel labelText='Geschick' />
          <InputWithLabel labelText='Klugheit' />
          <InputWithLabel labelText='Charisma' />
          <InputWithLabel labelText='Wissen' />
        </div>
        <div>
          <h2>Ausrüstung</h2>
        </div>
        <div>
          <h2>Kräfte</h2>
        </div>
        <div className="wunden">
          <h2>Wunden</h2>
          <div className="wunde"/>
          <div className="wunde"/>
          <div className="wunde"/>
        </div>
      </div>
      <div>
        <h2>Notizen</h2>
      </div>
    </Page>
  );
}

export default BoldLegends;
