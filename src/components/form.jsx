export function Formulario() {
  return (
    <div className="h-[calc(100vh-30rem)] flex justify-center items-center">
      <form action="" className="">
        <header className="flex justify-between">
          <h1 className="text-white font-semibold text-3xl">Crear flashcard</h1>
        </header>

        <input
          type="text"
          name="nombreProvisional"
          placeholder="Pregunta aquí"
          className="bg-gray-800 focus:border-4 border-2 w-full px-16 py-4  rounded-lg my-4 text-white"/>
      </form>




    </div>
  )
}

exports = { Formulario }