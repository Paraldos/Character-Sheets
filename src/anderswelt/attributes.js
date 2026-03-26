import "./attributes.css";

export default class Attributes {
  list = [
    "Kraft",
    "Geschick",
    "Gerissenheit",
    "Kämpfen",
    "Charisma",
    "Dominanz",
    "Klugheit",
    "Instinkt",
  ];

  constructor(container) {
    container.classList.add("attributes");
    this.list.forEach((att) => this.addAttribut(att, container));
  }

  addAttribut(att, container) {
    const e = document.createElement("div");
    e.className = "attribute";
    e.innerHTML = `
		<p>${att}</p>
		<div class="value"></div>
	`;
    container.appendChild(e);
  }
}
