function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Easy Demon":
      return "green";
    case "Medium Demon":
      return "blue";
    case "Hard Demon":
      return "orange";
    case "Insane Demon":
      return "purple";
    case "Extreme Demon":
      return "red";
    default:
      return "gray";
  }
}

const container = document.getElementById("demon-list");

fetch("/demons")
  .then(res => res.json())
  .then(demons => {
    const container = document.getElementById("demon-list");
    container.innerHTML = "";

    demons.forEach(demon => {
      const card = document.createElement("div");
      card.classList.add("demon-card");

      card.innerHTML = `
        <h2>#${demon.placement} - ${demon.name}</h2>
        <p><strong>Difficulty:</strong> ${demon.difficulty}</p>
        <p><strong>Attempts:</strong> ${demon.attempts}</p>
        <p><strong>Enjoyment:</strong> ${demon.enjoyment}/10</p>
        <p>${demon.notes}</p>
      `;

      container.appendChild(card);
    });
  });

const container = document.getElementById("demon-list");

// sort by placement
demons.sort((a, b) => a.placement - b.placement);

demons.forEach((demon) => {
  const card = document.createElement("div");
  card.classList.add("demon-card");
  card.style.borderLeft = `5px solid ${getDifficultyColor(demon.difficulty)}`;

  card.innerHTML = `
  <h2>#${demon.placement} - ${demon.name}</h2>
  <p><strong>Difficulty:</strong> ${demon.difficulty}</p>
  <p><strong>Attempts:</strong> ${demon.attempts}</p>
  <p><strong>Enjoyment:</strong> ${demon.enjoyment}/10</p>
  <p>${demon.notes}</p>
`;

  container.appendChild(card);
});
