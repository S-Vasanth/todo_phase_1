function saveElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("value").value;
  let task = document.createElement("input");
  task.value = inputValue;
  task.setAttribute("readonly", "readonly");
  li.appendChild(task);

  if (inputValue === "") {
    alert("yes enter some value");
  }
  document.getElementById("addElement").appendChild(li);
  let edit = document.createElement("button");
  edit.innerHTML = "edit";
  let del = document.createElement("button");
  del.innerHTML = "delete";

  li.appendChild(edit);
  li.appendChild(del);
  document.getElementById("value").value = "";

  edit.addEventListener("click", (e) => {
    if (edit.innerHTML == "edit") {
      edit.innerHTML = "save";
      task.removeAttribute("readonly");
      task.focus();
    } else {
      edit.innerHTML = "edit";
      task.setAttribute("readonly", "readonly");
    }
  });

  del.addEventListener("click", () => {
    document.getElementById("addElement").removeChild(li);
  });
}
