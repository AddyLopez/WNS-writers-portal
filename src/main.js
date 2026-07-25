import { promptsLibrary } from "./data/prompts-library.js";

const promptsBox = document.getElementById("prompts-container");
const fragment = document.createDocumentFragment();

promptsLibrary.forEach((item) => {
  const div = document.createElement("div");
  div.id = `${item.id}`;

  const promptTitle = document.createElement("p");
  promptTitle.classList.add("prompt-title");
  promptTitle.textContent = `${item.id} | ${item.tags}`;

  const promptBody = document.createElement("p");
  promptBody.classList.add("prompt-body");
  promptBody.textContent = `${item.prompt}`;
  promptBody.id = `${item.id}-a`;

  fragment.appendChild(div);
  fragment.getElementById(`${item.id}`).appendChild(promptTitle);
  if (!item.isOpen) {
    const promptStatus = document.createElement("p");
    promptStatus.classList.add("prompt-status");
    promptStatus.textContent = "completed";
    fragment.getElementById(`${item.id}`).appendChild(promptStatus);
  }
  fragment.getElementById(`${item.id}`).appendChild(promptBody);
});

promptsBox.appendChild(fragment);
