import "./titel.css";

export default class Titel {
  constructor(container, playbook) {
    container.innerHTML = `
		<div class="titel">
			<h1>${playbook.titel}</h1>
		</div>
	`;
  }
}
