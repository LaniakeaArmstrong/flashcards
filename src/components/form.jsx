
//TODO: extrae los elementos HTML necesarios para crear el formulario que se usará tanto para crear como para editar flashcards

export function Formulario() {
  return (
    <div className="h-[calc(100vh-25rem)] flex justify-center items-">
      <form action="" method="" className="">
        <textarea
          name="pregunta"
          placeholder="Pregunta aquí..."
          cols="60"
          rows="1"
          autoFocus
          className="bg-gray-800 text-white
            rounded-lg focus:border-21 border px-3 py-3 resize-none outline-none text-center"/>
      </form>

    </div>
  )
}

exports = { Formulario }