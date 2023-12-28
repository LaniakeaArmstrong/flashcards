"use client"
import { useParams, useRouter } from "next/navigation";

export function DeleteButton() {
  const router = useRouter();
  const params = useParams();

  const deleteFlashcard = async () => {
    try {
      let confirm = window.confirm("¿Seguro desea eliminar esta flashcard?")
      if (confirm === true) {
        await fetch(`/api/flashcards/${ params.id }`, {
          method: "DELETE"
        })
        alert(`Flashcard N° ${params.id} eliminada correctamente`)
        router.push("/")
        router.refresh()
      }
    } catch (error) {
      console.error("Ocurrió un error al eliminar la flashcard: ", error)
    }
  }
  return (
    <>
      <button
        className="bg-red-600 text-white font-medium px-3 py-2 rounded-md"
        type="button"
        onClick={ deleteFlashcard }>Borrar</button>
    </>
  )
}