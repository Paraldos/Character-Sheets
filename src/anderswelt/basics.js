import "./basics.css";

export default class Basics {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "basics";
    container.appendChild(e);

    const basics = ["Name", "Konzept", "Herkunft", "Motive", "Beschreibung"];
    basics.forEach((label) => this.createField(label, e));
  }

  createField(labelText, container) {
    const field = document.createElement("div");
    field.className = "field";
    if (labelText == "Beschreibung") field.classList.add("big");
    field.innerHTML = `
		<p class="value"></p>
		<p class="label">${labelText}</p>
	`;
    container.appendChild(field);
  }
}
