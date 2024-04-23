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

about.innerHTML +=
  "<p>Hi, I'm Harshith V, an aspiring software engineer with a strong foundation in Information Science and hands-on experience in artificial intelligence and machine learning. </p><p>I recently completed my Bachelor's degree in Information Science at Bangalore Institute of Technology with a CGPA of 9.40.</p>My expertise includes C/C++, Python, and JavaScript, and I have developed proficiency in frameworks like React.js, Node.js, MongoDB, and Express.js. I'm passionate about technology, constantly learning new skills, and enjoy tackling challenging projects.";

function handleKeyPress(e) {
  if (e.key === "Enter") {
    const inputField = e.target;
    const command = inputField.value.trim();
    const outputArea = document.createElement("div");
    const targetContainer = document.getElementById("terminal-body");

    switch (command.toLowerCase()) {
      case "help":
        outputArea.innerHTML =
          "Available commands: about, skills, projects, contact, clear, exit";
        break;
      case "about":
        outputArea.className = "about";
        const img = document.createElement("img");
        img.src = "images/harshi.jpeg";
        img.className = "img-harshi";
        outputArea.appendChild(img);
        outputArea.appendChild(about);
        break;

      case "clear":
        // Clear all content and create a new single input field
        const terminalBody=document.getElementById("terminal-body");
        terminalBody.innerHTML = "";
        copyDiv();
        
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

document.getElementById("text").addEventListener("keydown", handleKeyPress);
