import "./stats.css";
import dmgSvg from "../assets/dmg.svg";

export default class Stats {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "stats";
    container.appendChild(e);

    this.addDmg(e);
  }

  addDmg(container) {
    const e = document.createElement("div");
    e.className = "dmg";
    const symbols = Array(3)
      .fill(`<img src="${dmgSvg}" class="dmg__symbol" />`)
      .join("");
    e.innerHTML = `
		<p class="value">Schaden</p>
		<div class="dmg__symbols">${symbols}</div>
	`;
    container.appendChild(e);
  }
}
