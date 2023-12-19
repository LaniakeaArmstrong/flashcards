"use client"

import { useParams, useRouter } from "next/navigation";
import { useState } from "react"

//TODO: cambiar texto de formulario (Crear Flashcard) a "Modificar Flashcard" o "Crear Flashcard" según corresponda

export function FormFlashcards() {
  const [newFlashcard, setNewFlashcard] = useState({ Question: "", Answer: "" });
  const router = useRouter()
  const params = useParams()

  // const obtenerFlashcard = async () => {
  //   const response = await fetch(`/api/flashcards/${ params.id }`, { method: "GET" });
  // }

  const crearFlashcard = async () => {
    try {
      await fetch('/api/flashcards', {
        method: "POST",
        body: JSON.stringify(newFlashcard),
        headers: { "Content-Type": "application/json" },
      })
      router.push("/")
      router.refresh()
      alert("Flashcard se guardó exitosamente")
    } catch (error) {
      console.log(error)
    }
  }

  const manejarCambios = async (elem) => {
    setNewFlashcard({ ...newFlashcard, [elem.target.name]: elem.target.value })
  }

  const guardarFlashcard = async (event) => {
    event.preventDefault();
    if (!params.id) {
      await crearFlashcard()
    }
  }

  return (
    <form onSubmit={ guardarFlashcard }>

      { /* //* "items-center" centra elementos VERTICALMENTE, pero antes fíjate en el TAMAÑO que CONTIENE los elementos a centrar*/ }
      <div className="flex flex-col gap-y-3 mt-40 mx-[500px]">
        <div className="flex justify-between">
          <h1 className="text-white font-semibold text-3xl">
            {
              !params.id ? "Crear Flashcard" : "Modificar Flashcard"
            }
          </h1>
          <button
            className="bg-red-600 text-white font-medium px-3 py-2 rounded-md"
            type="button">Borrar</button>
        </div>

        <textarea name="Question"
          placeholder="Pregunta aquí..."
          cols="80"
          rows="1"
          onChange={ manejarCambios }
          value={ newFlashcard.Question }
          autoFocus
          className="bg-gray-800 text-white rounded-lg focus:border-21 border py-3
          resize-none outline-none text-center mb-5"></textarea>
        <textarea
          name="Answer"
          placeholder="Respuesta aquí..."
          cols="80"
          rows="6"
          onChange={ manejarCambios }
          value={ newFlashcard.Answer }
          className="bg-gray-800 text-white rounded-lg focus:border-21 border py-3
          resize-none outline-none text-center"></textarea>

        <button
          type="submit"
          className="bg-green-400 text-white py-2 ml-[600px] mt-3 rounded-lg font-medium"
          id="botonGuardar">Guardar</button>
      </div>
    </form>
  )
}

module.exports = { FormFlashcards }