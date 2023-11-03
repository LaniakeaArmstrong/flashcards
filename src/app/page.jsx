"use client"
import FlashCard from "@/components/flashcard";
import Link from "next/link";
import { useState } from "react";

export default function Inicio() {
  const [flashCardCount, setFlashCardCount] = useState(1);
  const [animateBounce, setAnimateBounce] = useState(true);

  //* Crea flashcards y detiene la animación de rebote del botón +
  const handleClick = () => {
    setFlashCardCount(flashCardCount + 1);
    setAnimateBounce(false);
  };

  return (
    <>
      <Link href="/new">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="5.0em"
          viewBox="0 0 448 512"
          fill="#fff"
          className={ `text-white bg-green-400 hover:border-white
        p-5 rounded-full relative bottom-[-39rem] left-6 ${ animateBounce ? 'animate-bounce' : '' }
        hover:cursor-pointer`}
          onClick={ handleClick }>
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </Link>

      <div className="grid grid-cols-2">
        { Array.from({ length: flashCardCount }).map((_, index) => (
          <FlashCard key={ index } />
        )) }
      </div>
    </>
  );
}