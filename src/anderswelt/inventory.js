import "./inventory.css";

export default class Basics {
  constructor(container, playbook) {
    const e = document.createElement("div");
    e.className = "inventory";
    container.appendChild(e);

    e.innerHTML = `
		<div class="list">
			<h1>Gepäck</h1>
			<p>Leicht (2)</p>
			<p>Mittel (5)</p>
			<p>Schwer (10)</p>
		</div>
		<div class="items">
			${playbook.items.map((item) => this.getItem(item)).join("")}
		</div>
		<div class="notes"></div>
	`;
  }

  getItem(item) {
    let boxHtml = this.getBox(item.amount ? item.amount : 1);
    return `
	<div class="item">
		${boxHtml}
		<p>${item.name}</p>
	</div>`;
  }

  getBox(amount) {
    let boxHtml = "";
    for (let i = 0; i < amount; i++) {
      boxHtml += '<div class="box"></div>';
    }
    return boxHtml;
  }
}
