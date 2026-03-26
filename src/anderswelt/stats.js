import "./stats.css";
import dmgSvg from "../assets/dmg.svg";
import stressSvg from "../assets/stress.svg";

export default class Stats {
  constructor(container) {
    const e = document.createElement("div");
    e.className = "stats";
    container.appendChild(e);

    this.addDmg(e);
    this.addStress(e);
  }

  addDmg(container) {
    const e = document.createElement("div");
    e.className = "dmg";
    const symbols = Array(3)
      .fill(`<img src="${dmgSvg}" class="dmg__symbol" />`)
      .join("");
    e.innerHTML = `
		<div class="dmg__symbols">${symbols}</div>
		<p class="label">Schaden</p>
	`;
    container.appendChild(e);
  }

  addStress(container) {
    const e = document.createElement("div");
    e.className = "stress";
    const symbols = Array(7)
      .fill(`<img src="${stressSvg}" class="stress__symbol" />`)
      .join("");
    e.innerHTML = `
		<div class="stress__symbols">${symbols}</div>
		<p class="label">Stress</p>
	`;
    container.appendChild(e);
  }
}
