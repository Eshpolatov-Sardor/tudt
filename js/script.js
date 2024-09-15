"use strict";

const inputTU = document.getElementById("display");
const submit = document.getElementById("Submit");
const taskList = document.getElementById("task-list");

submit.addEventListener("click", function (e) {
  let displayValue = inputTU.value;

  if (displayValue.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = displayValue;
    newTask.style.marginTop = "10px";
    newTask.style.fontSize = "20px"

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginLeft = "60px"
    editButton.style.background = "green";
    editButton.style.padding = "2px";
    editButton.addEventListener("click", function (e) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = newTask.firstChild.textContent;

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.style.background = "yellow";
      newTask.innerHTML = "";
      newTask.appendChild(editInput);
      newTask.appendChild(saveButton);

      saveButton.addEventListener("click", function (e) {
        if (editInput.value.trim() !== "") {
          newTask.innerHTML = "";
          newTask.textContent = editInput.value;
          newTask.appendChild(editButton);
          newTask.appendChild(deleteButton);
        }
      });
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "70px";
    deleteButton.style.background = "red";
    deleteButton.style.padding = "2px";
    deleteButton.addEventListener("click", function (e) {
      newTask.remove();
    });

    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    inputTU.value = "";
  } else {
    console.log("xato xato xato");
  }
});
