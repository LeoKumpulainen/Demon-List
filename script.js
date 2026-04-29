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

const demons = [
  {
    name: "Niwa",
    placement: 1,
    difficulty: "Extreme Demon",
    attempts: 26120,
    enjoyment: 10,
    notes: "The Best Level OAT.",
  },
  {
    name: "Cataclysm",
    placement: 2,
    difficulty: "Extreme Demon",
    attempts: 18000 + "~",
    enjoyment: 2,
    notes: "GGBoy can khs",
  },
  {
    name: "Amuletum",
    placement: 3,
    difficulty: "Insane Demon",
    attempts: 9000 + "~",
    enjoyment: 9.5,
    notes: "Calma",
  },
];

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
