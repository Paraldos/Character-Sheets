import "./talents.css";

export default class Talents {
  constructor(container, playbook) {
    console.log(playbook);
    container.innerHTML += `
		<div class="talents">
			${playbook.talents.map((talent) => this.getTalent(talent)).join("")}
		</div>
	`;
  }

  getTalent(talent) {
    let boxHtml = this.getBox(talent.amount ? talent.amount : 1);
    return `
	<div class="talent">
		${boxHtml}
		<p>${talent.description}</p>
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
