import "./style.css";
import Anderswelt from "./anderswelt/anderswelt";

const app = document.getElementById("app");
new Anderswelt(app, "abenteurer");
new Anderswelt(app, "charmer");
new Anderswelt(app, "detective");
new Anderswelt(app, "ganove");
