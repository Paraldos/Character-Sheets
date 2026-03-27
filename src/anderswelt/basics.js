import "./basics.css";

export default class Basics {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "basics";
    container.appendChild(e);

    e.innerHTML = `
		${this.createField("Name")}
		${this.createField("Level / XP")}
		${this.createField("Herkunft / Motiv", "wide")}
		${this.createField("Beschreibung", "wide tall")}
	`;
  }

  createField(labelText, classes) {
    return `
		<div class="field ${classes}">
			<p class="value"></p>
			<p class="label">${labelText}</p>
		</div>`;
  }
}
