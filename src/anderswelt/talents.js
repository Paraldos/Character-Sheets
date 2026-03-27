import "./talents.css";

export default class Talents {
  constructor(container, playbook) {
    console.log(playbook);
    container.innerHTML += `
		<div class="talents">
			${playbook.talents.map((talent) => this.getTalent(talent)).join("")}
			<div class="talent">
				${this.getBox(2)}
				<p>Lern ein Talent eines anderen Playbooks</p>
			</div>
		</div>
	`;
  }

  getTalent(talent) {
    let boxHtml = this.getBox(talent.amount ? talent.amount : 1);
    return `
	<div class="talent">
		${boxHtml}
		<p><span class="talent-titel">${talent.titel}</span>${talent.cost ? " (" + talent.cost + ")" : ""}: ${talent.description}</p>
	</div>`;
  }

  getCosts() {}

  getBox(amount) {
    let boxHtml = "";
    for (let i = 0; i < amount; i++) {
      boxHtml += '<div class="box"></div>';
    }
    return boxHtml;
  }
}
