import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { firebaseConfig } from "/modules/firebase.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const gettingData = function () {
  get(child(ref(db), "myproject/")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const info = snapshot.val();
      for (let anim in info) {
        const anmlInfo = info[anim];
        const anmlCard = document.createElement("div");
        const animId = document.createElement("p");
        const anml = document.createElement("p");
        const animalName = document.createElement("p");
        const animalAge = document.createElement("p");
        const animalPicture = document.createElement("img");

        anmlCard.className = "allInputs";

        const allCards = document.getElementById("cardsContainer");

        animId.innerText = anmlInfo.id;
        anml.innerText = anmlInfo.animal;
        animalName.innerText = anmlInfo.name;
        animalAge.innerText = anmlInfo.age;
        animalPicture.src = anmlInfo.picture;

        document.body.append(anmlCard);
        anmlCard.append(animId, anml, animalName, animalAge, animalPicture);
        allCards.append(anmlCard);
      }
    }
  });
};
