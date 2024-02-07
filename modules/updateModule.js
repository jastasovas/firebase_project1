import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { firebaseConfig } from "/modules/firebase.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let animalId = document.getElementById("idInpt");
let animalInpt = document.getElementById("anml");
let animalName = document.getElementById("anmlName");
let animalAge = document.getElementById("anmlAge");
let animalPicture = document.getElementById("anmlPic");

let upBtn = document.getElementById("upBtn");

upBtn.addEventListener("click", (e) => {
  e.preventDefault();

  update(ref(db, "myproject/" + animalId.value), {
    id: animalId.value,
    animal: animalInpt.value,
    name: animalName.value,
    age: animalAge.value,
    picture: animalPicture.value,
  })
    .then(() => {
      alert("Updated");
      window.location.reload();
    })
    .catch((error) => {
      alert(error);
    });
});
