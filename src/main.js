import { promptsLibrary } from "./data/prompts-library.js";

const promptsBox = document.getElementById("prompts");
const fragment = document.createDocumentFragment();

promptsLibrary.forEach((item) => {
  if (item.isOpen) {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.prompt}`;
    fragment.appendChild(listItem);
  }
});

promptsBox.appendChild(fragment);
