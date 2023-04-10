const img = document.querySelector(".img");
const summary = document.querySelector(".summary");
const skills = document.querySelector(".skills");
const experience = document.querySelector(".experience");
const achievements = document.querySelector(".achievements");

// Збільшення фото
img.addEventListener("click", (event) => {
  img.classList.toggle("animation");
});

// Навігація
document.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "s":
      summary.scrollIntoView();
      break;
    case "h":
      skills.scrollIntoView();
      break;
    case "e":
      experience.scrollIntoView();
      break;
    case "a":
      achievements.scrollIntoView();
      break;
    default:
      alert("The entry is not valid");
  }
});
