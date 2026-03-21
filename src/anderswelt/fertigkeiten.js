export default class Fertigkeiten {
  constructor(container) {
    const mentaleFertigkeiten = [
      "Bildung",
      "Handwerk",
      "Heilkunde",
      "Strategie",
      "Wahrnehmung",
      "Willenskraft",
      "Zauberei",
    ];
    const physischeFertigkeiten = [
      "Kraft",
      "Geschick",
      "Diebstahl",
      "Reiten / Fahren",
      "Heimlichkeit",
      "Überleben",
      "Nahkampf",
      "Fernkampf",
      "Verteidigung",
    ];
    const sozialeFertigkeiten = [
      "Empathie",
      "Etikette",
      "Straßenwissen",
      "Provozieren",
      "Überreden",
      "Tierkunde",
      "Unterhalten",
      "Kunst",
    ];

    const e = document.createElement("div");
    e.innerHTML = `<h2>Fertigkeiten</h2>`;
    e.classList = "fertigkeiten";
    container.appendChild(e);

    this.addBlock(e, mentaleFertigkeiten, "Mental");
    this.addBlock(e, physischeFertigkeiten, "Physisch");
    this.addBlock(e, sozialeFertigkeiten, "Sozial");
  }

  addBlock(container, list, titel = "") {
    const e = document.createElement("div");
    e.classList = "block";
    container.appendChild(e);

    list.forEach((fertigkeit) => this.addFertigkeit(e, fertigkeit));
  }

  addFertigkeit(container, fertigkeit) {
    const e = document.createElement("div");
    e.classList = "fertigkeit";
    e.innerHTML = `
		<p>${fertigkeit}</p>
		<div></div>
	`;
    container.appendChild(e);
  }
}
