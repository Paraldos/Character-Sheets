export default class Basics {
  constructor(container) {
    const basics = [
      "Name",
      "Konzept",
      "XP/Level",
      "Herkunft",
      "Hintergrund",
      "Motive",
      "Beschreibung",
    ];

    const e = document.createElement("div");
    e.className = "basics";
    container.appendChild(e);

    basics.forEach((label) => this.createField(label, e));
  }

  createField(labelText, container) {
    const field = document.createElement("div");
    field.className = "basic-field";
    if (labelText == "Beschreibung") {
      field.classList.add("full");
    }

    const label = document.createElement("label");
    label.textContent = labelText;

    const value = document.createElement("div");
    value.className = "basic-value";

    field.appendChild(label);
    field.appendChild(value);

    container.appendChild(field);
  }
}
