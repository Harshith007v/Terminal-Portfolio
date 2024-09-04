function copyDiv() {
  const sourceDiv = document.getElementById("start");
  const clonedDiv = sourceDiv.cloneNode(true);

  const newInputField = clonedDiv.querySelector("input");
  newInputField.value = "";
  newInputField.id = "newText" + Math.random();

  const targetContainer = document.getElementById("terminal-body");
  targetContainer.appendChild(clonedDiv);

  newInputField.addEventListener("keydown", handleKeyPress);

  newInputField.focus();
}

const about = document.createElement("div");

function handleKeyPress(e) {
  if (e.key === "Enter") {
    const inputField = e.target;
    const command = inputField.value.trim();
    const outputArea = document.createElement("div");
    const targetContainer = document.getElementById("terminal-body");

    switch (command.toLowerCase()) {
      case "help":
        outputArea.className = "intro";
        outputArea.innerHTML =
          "Available commands: about, skills, projects, contact, clear.";
        break;
      case "about":
        outputArea.className = "about";

        const imgdiv = document.createElement("div");
        imgdiv.className = "imgdiv";

        const img1 = document.createElement("img");
        img1.src = "images/harshi.jpeg";
        img1.className = "img-harshi";

        // const img2 = document.createElement("img");
        // img2.src = "images/harshi2.jpeg";
        // img2.className = "img-harshi";

        // const img3 = document.createElement("img");
        // img3.src = "images/harshi.jpeg";
        // img3.className = "img-harshi";

        imgdiv.appendChild(img1);
        // imgdiv.appendChild(img2);
        // imgdiv.appendChild(img3);

        about.appendChild(imgdiv);

        about.innerHTML +=
          "<p>Hi, I'm Harshith V, an aspiring software engineer with a strong foundation in Information Science and hands-on experience in artificial intelligence and machine learning. </p><p>I recently completed my Bachelor's degree in Information Science at Bangalore Institute of Technology with a CGPA of 9.40.</p>My expertise includes C/C++, Python, and JavaScript, and I have developed proficiency in frameworks like React.js, Node.js, MongoDB, and Express.js. I'm passionate about technology, constantly learning new skills, and enjoy tackling challenging projects.";

        outputArea.appendChild(about);
        break;

      case "skills":
        const targetContainer = document.getElementById("terminal-body");

        const wholeskills = document.createElement("div");
        wholeskills.style.display = "flex";
        wholeskills.className = "wholeskills";
        wholeskills.style.gap = "40px";
        wholeskills.style.margin = "15px 0 0 15%";

        function createSkill(language, proficiency) {
          const skillDiv = document.createElement("div");
          skillDiv.style.marginBottom = "10px";

          const progressContainer = document.createElement("div");
          progressContainer.classList.add("progress-container");
          skillDiv.appendChild(progressContainer);

          const languageDiv = document.createElement("div");
          languageDiv.innerText = language;
          languageDiv.className = "lang";
          skillDiv.appendChild(languageDiv);

          const progressBar = document.createElement("div");
          progressBar.classList.add("progress-bar");
          progressBar.innerHTML = `${proficiency}%`;
          progressContainer.appendChild(progressBar);

          return skillDiv;
        }

        const cppSkill = createSkill("C++", 80);
        const jsSkill = createSkill("JS", 80);
        const pythonSkill = createSkill("PY", 70);
        const mern = createSkill("MERN", 60);
        const java = createSkill("JAVA", 40);

        wholeskills.appendChild(jsSkill);
        wholeskills.appendChild(mern);
        wholeskills.appendChild(cppSkill);
        wholeskills.appendChild(pythonSkill);
        wholeskills.appendChild(java);

        targetContainer.appendChild(wholeskills);

        break;

      case "contact":
        const githubLink = document.createElement("a");
        githubLink.href = "https://github.com/Harshith007v";
        githubLink.target = "_blank";
        githubLink.innerText = "GitHub";
        githubLink.style.color = "white";
        githubLink.style.margin = "10px 0 10px 15px";

        const linkedinLink = document.createElement("a");
        linkedinLink.href =
          "https://www.linkedin.com/in/harshith-v-69858826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        linkedinLink.target = "_blank";
        linkedinLink.innerText = "LinkedIn";
        linkedinLink.style.color = "white";
        linkedinLink.style.margin = "10px 0 10px 15px";

        const info = document.createElement("div");
        info.innerHTML +=
          "<p>Reach Me at : +91 8073066922</p> <p>Email : harshith.v02@gmail.com</p>";
        info.style.margin = "10px 0 10px 15px";

        outputArea.appendChild(info);
        outputArea.appendChild(githubLink);
        outputArea.appendChild(linkedinLink);

        break;

      case "projects":
        const proj = document.createElement("div");
        proj.innerHTML +=
          "<p>Please Click on the below links to view some of my projects.</p> ";
        proj.style.margin = "10px 0 0 15px";

        function createProject(link, name) {
          const newProject = document.createElement("a");
          newProject.href = link;
          newProject.target = "_blank";
          newProject.innerText = name;
          newProject.style.color = "white";
          newProject.style.margin = "10px 0 10px 15px";

          return newProject;
        }

        const todo = createProject(
          "https://harshithtodolist.netlify.app/",
          "ToDo-List-Reactjs"
        );

        const weather = createProject(
          "https://harshithwebapp.netlify.app/",
          "Weather-App"
        );

        outputArea.style.display = "flex";
        outputArea.style.flexDirection = "column";
        outputArea.appendChild(proj);
        outputArea.appendChild(todo);
        outputArea.appendChild(weather);

        break;

      case "clear":
        location.reload();

        break;

      default:
        outputArea.innerHTML = `Unknown command: ${command}`;
        break;
    }

    targetContainer.appendChild(outputArea);

    outputArea.scrollTop = outputArea.scrollHeight;

    copyDiv();
  }
}
const input = document.getElementById("cli-input");
input.focus();
document.getElementById("text").addEventListener("keydown", handleKeyPress);
