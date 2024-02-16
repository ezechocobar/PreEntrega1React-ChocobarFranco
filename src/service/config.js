import  {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
//Vamos a importar dos funciones de firebase
//1era permite iniciar conexion con Firebase
//2da permite obtener una instancia del Firestore.


//Esto es toda la info de la cuenta
//Se incluye la key personal para acceder a la bd.
const firebaseConfig = {
  apiKey: "AIzaSyCj9RwW5BiTECyGjMndxNwma7AYEWziB7g",
  authDomain: "bartender-tucson.firebaseapp.com",
  projectId: "bartender-tucson",
  storageBucket: "bartender-tucson.appspot.com",
  messagingSenderId: "1045228900869",
  appId: "1:1045228900869:web:8b7fcc70515f186a5e426c"
};

//inicializamos Firebase y se pasa la config como argumento.
//Esto me retorna una instancia de Firebase.
const app = initializeApp(firebaseConfig);


//Ahora uso esa instancia para obtener el servicio del store
export const db = getFirestore(app);