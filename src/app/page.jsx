"use client"
import { useState } from "react";
import { FlashCard } from "@/components/flashcard";

export default function Inicio() {
  const [showFlashCard, setShowFlashCard] = useState(false);

  const handleClick = () => {
    setShowFlashCard(!showFlashCard);
  };

  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="5.0em"
        viewBox="0 0 448 512"
        fill="#fff"
        className="text-white bg-green-400 hover:border-white
        p-5 rounded-full relative bottom-[-39rem] left-6 animate-bounce hover:cursor-pointer hover:border"
        onClick={handleClick}>
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>

      <div>
        {showFlashCard && <FlashCard />}
      </div>
    </div>

  );
}