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
  remove,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

let animalId = document.getElementById("idInpt");
let animalInpt = document.getElementById("anml");
let animalName = document.getElementById("anmlName");
let animalAge = document.getElementById("anmlAge");
let animalPicture = document.getElementById("anmlPic");

let delBtn = document.getElementById("delBtn");

delBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const dbRef = ref(getDatabase());
  get(child(dbRef, `myproject/${animalId.value}`)).then((snapshot) => {
    if (snapshot.exists()) {
      remove(ref(getDatabase(), `myproject/${animalId.value}`)).then(() => {
        alert("Animal removed");
        window.location.reload();
      });
    }
  });
});
