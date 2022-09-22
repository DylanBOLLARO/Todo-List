// créer un form pr taper les todo
// ajouter sur le dom ce qui est tapé dans l'input à la validation du form

// supprimer les todo lorsque l'on click dessus (.remove())
// stocker dans le local storage la liste
// consulter le local storage au lancement de l'application pour rajouter les todos

const inputText = document.querySelector('input[type="text"]');
const btnAdd = document.getElementById("boutonAjouter");
const injectionBox = document.querySelector(".todoListContainer");

let input;

inputText.addEventListener("input", (e) => {
  input = e.target.value;
});

function addToTodoList() {
  if (input == null || input == "") {
    alert("Veuillez indiquer un nom à votre todo tâche");
    return;
  }
  let div = document.createElement("div");
  div.innerHTML = `${input}`;
  div.className = "box";
  document.querySelector(".todoListContainer").appendChild(div);
  inputText.value = "";
}

btnAdd.addEventListener("click", () => {
  addToTodoList();
  input = "";
});

inputText.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addToTodoList();
    input = "";
  }
});

addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    if (e.target.classList.contains("orange")) {
      e.target.remove();
    }
    e.target.classList.add("orange");
    e.target.style.color = "#ffaa00";
    setTimeout(() => {
      e.target.classList.remove("orange");
      e.target.attributeStyleMap.delete("color");
    }, 4000);
  }
});
