"use client"

//TODO: cambiar texto de formulario (Crear Flashcard) a "Modificar Flashcard" o "Crear Flashcard" según corresponda
export function Form() {
  return (
    // <div className="">
    <form action="" method="" className="relative">
      <h1 className="text-white font-semibold text-3xl absolute left-1/3 top-[180px]">Crear Flashcard</h1>
      <textarea
        name="pregunta"
        placeholder="Pregunta aquí..."
        cols="70"
        rows="1"
        autoFocus
        className="bg-gray-800 text-white
            rounded-lg focus:border-21 border px-3 py-3 resize-none outline-none text-center absolute left-1/3 top-[230px]"/>

      <textarea
        name="respuesta"
        placeholder="Respuesta aquí..."
        cols="70"
        rows="5"
        className="bg-gray-800 text-white
          rounded-lg focus:border-21 border px-3 py-3 resize-none outline-none text-center absolute left-1/3 top-[310px]">

      </textarea>
    </form>
    // </div>
  )
}

module.exports = { Form }