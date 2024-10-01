import "./style.css";

// Importer le fichier JSON avec Vite
import jsonData from "./cv_koraichi_fatima.json";

// Fonction pour afficher les informations personnelles
function displayPersonalInfo(data) {
  const container = document.createElement("div");
  container.classList.add("personal-info");
  container.innerHTML = `
        <h2>${data.name}</h2>
        <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
        <p>Site Web: <a href="${data.website}" target="_blank">${data.website}</a></p>
        <p>Portfolio: <a href="${data.portfolio}" target="_blank">${data.portfolio}</a></p>
        <p>Téléphone: ${data.phone}</p>
        <p>Adresse: ${data.address}</p>
    `;
  document.body.appendChild(container);
}

// Fonction pour afficher les compétences
function displaySkills(skills) {
  const container = document.createElement("div");
  container.classList.add("skills");
  container.innerHTML = `
        <h3>Hard skills</h3>
        <ul>
            ${skills.hard_skills.map((skill) => `<li>${skill}</li>`).join("")}
        </ul>
        <h3>Soft skills</h3>
        <ul>
            ${skills.soft_skills.map((skill) => `<li>${skill}</li>`).join("")}
        </ul>
        <h3>Langues</h3>
        <p>Français: ${skills.languages.français}</p>
        <p>Anglais: ${skills.languages.anglais}</p>
    `;
  document.body.appendChild(container);
}
// Fonction pour afficher les langues
function displayLanguages(languages) {
  const container = document.createElement("div");
  container.classList.add("languages");
  container.innerHTML = `
        <h3>Langues</h3>
        <ul>
            <li>Français: ${languages.français}</li>
            <li>Anglais: ${languages.anglais}</li>
            <!-- Ajoutez d'autres langues si nécessaire -->
        </ul>
    `;
  document.body.appendChild(container);
}
// Fonction pour afficher l'expérience professionnelle
function displayExperience(experiences) {
  const container = document.createElement("div");
  container.classList.add("experience");
  container.innerHTML = "<h3>Expérience Professionnelle</h3>";

  experiences.forEach((exp) => {
    const experienceElement = document.createElement("div");
    experienceElement.classList.add("experience-item");
    experienceElement.innerHTML = `
            <h4>${exp.position} - ${exp.company}</h4>
            <p>${exp.dates}</p>
            <ul>
                ${exp.tasks.map((task) => `<li>${task}</li>`).join("")}
            </ul>
        `;
    container.appendChild(experienceElement);
  });

  document.body.appendChild(container);
}

// Fonction pour afficher la formation
function displayEducation(education) {
  const container = document.createElement("div");
  container.classList.add("education");
  container.innerHTML = "<h3>Formation</h3>";

  education.forEach((edu) => {
    const educationElement = document.createElement("div");
    educationElement.classList.add("education-item");
    educationElement.innerHTML = `
            <h4>${edu.degree} - ${edu.institution}</h4>
            <p>${edu.dates}</p>
            <p>Lieu: ${edu.location}</p>
        `;
    container.appendChild(educationElement);
  });

  document.body.appendChild(container);
}

// Appeler les fonctions pour afficher les données sur la page
displayPersonalInfo(jsonData.personal_info);
displaySkills(jsonData.skills);
displayExperience(jsonData.experience);
displayEducation(jsonData.education);
