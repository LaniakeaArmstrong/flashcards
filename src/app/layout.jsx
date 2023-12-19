"use client"
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html>
      <body className='bg-gray-900'>
        <nav className='grid grid-cols-3 grid-rows-1 bg-indigo-700'>
          <button
            type='button'
            className='text-white bg-emerald-500 hover:bg-green-500
              rounded-lg font-medium active:bg-emerald-600 shadow-lg my-3 px-4 ml-5 justify-self-start'>
            { path === "/new" ?
              (<Link href="/">Regresar</Link>)
              :
              (<Link href="/new">Nueva FlashCard</Link>)
            }
          </button>
          <h1
            className="
            from-neutral-300 to-slate-50 bg-gradient-to-b
            hover:cursor-default hover:text-[2.8rem]
            font-extrabold text-[2.5rem] tracking-[.20em] duration-[300ms]
            py-1 select-none text-transparent bg-clip-text justify-self-center">FLASHCARDS</h1>
          <button
            type="button"
            className='text-white bg-orange-400
            rounded-lg font-medium px-4 my-3 mr-5 justify-self-end'>Pendiente nombre a este botón</button>
        </nav>

        { children }
      </body>
    </html>
  )
}
