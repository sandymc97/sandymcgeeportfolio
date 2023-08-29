document
  .getElementById("toggleProjects")
  .addEventListener("click", function () {
    const projectsSection = document.querySelector(".projects");
    const toggleButton = document.getElementById("toggleProjects");

    if (projectsSection.style.display === "none") {
      projectsSection.style.display = "block";
      toggleButton.textContent = "Close";
    } else {
      projectsSection.style.display = "none";
      toggleButton.textContent = "View Projects";
    }
  });
