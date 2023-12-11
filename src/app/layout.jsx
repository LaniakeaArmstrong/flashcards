"use client"
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html>
      <body className='bg-gray-900'>
        <nav className='bg-indigo-700'>
          <button
            type='button'
            className='text-white bg-emerald-500 hover:bg-green-500
              rounded-lg font-medium active:top-[15px] shadow-lg absolute py-2 px-4 left-3 top-3'>
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
            py-1 select-none text-transparent bg-clip-text relative left-[39.4%]">
            FLASHCARDS
          </h1>
        </nav>

        { children }

      </body>
    </html>
  )
}
