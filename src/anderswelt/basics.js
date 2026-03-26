import "./basics.css";

export default class Basics {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "basics";
    container.appendChild(e);

    e.innerHTML = `
		<div class="stats__1">
			${this.createField("Name")}
			${this.createField("Konzept")}
		</div>
		<div class="stats__2">
			${this.createField("Herkunft")}
			${this.createField("Level / XP")}
		</div>
		<div class="stats__3">
			${this.createField("Aspekte")}
		</div>
		<div class="stats__4">
			${this.createField("Beschreibung")}
		</div>
	`;
  }

  createField(labelText) {
    return `
		<div class="field">
			<p class="value"></p>
			<p class="label">${labelText}</p>
		</div>`;
  }
}
