
function FlashCard() {

  return (
    <div className="flex justify-center">
        <div
        className="
        text-white bg-gray-800 border-white
        rounded-lg py-32 px-48 border overflow-auto max-w-[50rem] max-h-[30rem]"
        type="text"
        value="Hola"
        contentEditable="true"
      />
    </div>
  );
}

export { FlashCard };