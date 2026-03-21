export default class Page {
  page;
  columns = [];

  constructor(container) {
    this.page = document.createElement("div");
    this.page.className = "page";
    container.appendChild(this.page);
  }

  addColumns(amount) {
    this.page.classList.add("page-container");
    this.page.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;

    for (let i = 0; i < amount; i++) {
      const e = document.createElement("div");
      e.className = "container-" + i;
      this.page.appendChild(e);
      this.columns.push(e);
    }
  }
}
