// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwh7XZUXlfVqOCCQ3avr2QpsZBsoWbuQw",
  authDomain: "movie-page-eeee1.firebaseapp.com",
  projectId: "movie-page-eeee1",
  storageBucket: "movie-page-eeee1.firebasestorage.app",
  messagingSenderId: "189058259686",
  appId: "1:189058259686:web:c2f73f85879a8ab49a3927",
  measurementId: "G-DFJWBCHBQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);





//데이터 보내기
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('title').value;

    try {
        const docRef = await addDoc(collection(db, 'movies'), {
            title: title,
            createdAt: new Data()
        });

        console.log("docRef.id")
        alert("Data has been saved successfully!")

        userForm.reset();
    } catch (e) {
        console.error(e);
        alert("There was an error saving your data.")
    }
});


//데이터 읽기
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "movies"));
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}

async function displayCards() {
    const data = await fetchData(); //firestore data 가져오기
    const cardContainer = document.querySelector('#card-container')

    data.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('cards');

        card.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            `;
        cardContainer.append(card);
    })
}

displayCards();