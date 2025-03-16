import "./skills.css";

function Skills() {
  const list_of_skills = [
    "Akrobatik",
    "Athletik",
    "Auftreten",
    "Diebstahl",
    "Einschüchtern",
    "Empathie",
    "Geschichte",
    "Heimlichkeit",
    "Magiekunde",
    "Mechanik",
    "Medizin",
    "Religion",
    "Überleben",
    "Überreden",
    "Wahrnehmung",
  ];

  return (
    <div className="skills">
      <h3>Fertigkeiten (Vorteil auf passende Proben)</h3>
      <ul>
        {list_of_skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
