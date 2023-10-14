import { useState } from 'react';

function FlashCard() {
  const [text, setText] = useState('Hola');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <input
        className="text-white bg-gray-800 rounded-lg py-28 px-20 border border-white text-center"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Escriba su pregunta"
      />
    </div>
  )
}

export { FlashCard };