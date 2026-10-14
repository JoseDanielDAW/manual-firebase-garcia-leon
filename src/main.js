import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "firebase/firestore";

const formulario = document.getElementById("formulario");
const tarea = document.getElementById("tarea");
const lista = document.getElementById("lista");

// Mostrar las tareas
async function mostrarTareas() {
    lista.innerHTML = "";

    const datos = await getDocs(collection(db, "tareas"));

    datos.forEach(function (dato) {
        const li = document.createElement("li");
        const boton = document.createElement("button");

        li.textContent = dato.data().nombre + " ";
        boton.textContent = "Eliminar";

        boton.addEventListener("click", async function () {
            await deleteDoc(doc(db, "tareas", dato.id));
            mostrarTareas();
        });

        li.appendChild(boton);
        lista.appendChild(li);
    });
}

// Añadir una tarea
formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    if (tarea.value != "") {
        await addDoc(collection(db, "tareas"), {
            nombre: tarea.value
        });

        tarea.value = "";
        mostrarTareas();
    }
});

mostrarTareas();
