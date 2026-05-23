import { promptsLibrary } from "./data/prompts-library.js";

const promptsBox = document.getElementById("prompts-container");
const fragment = document.createDocumentFragment();

promptsLibrary.forEach((item) => {
  if (item.isOpen) {
    const div = document.createElement("div");
    div.id = `${item.id}`;

    const paragraph = document.createElement("p");
    paragraph.textContent = `${item.id} | ${item.tags}`;

    const listItem = document.createElement("li");
    listItem.textContent = `${item.prompt}`;
    listItem.id = `${item.id}-a`;

    fragment.appendChild(div);
    fragment.getElementById(`${item.id}`).appendChild(paragraph);
    fragment.getElementById(`${item.id}`).appendChild(listItem);
  }
});

promptsBox.appendChild(fragment);
