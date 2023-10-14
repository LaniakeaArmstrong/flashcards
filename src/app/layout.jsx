import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-gray-900'>
        <nav className='flex justify-center bg-gradient-to-r from-indigo-600 to-amber-400'>

          <h1 className="
            font-extrabold text-[2.5rem] tracking-[.20em] py-1 select-none
            hover:cursor-default hover:text-[3rem] duration-[300ms] hover:tracking-[.30em]
            bg-gradient-to-b from-neutral-300 to-slate-50 text-transparent bg-clip-text
            ">
            FLASHCARDS
          </h1>

        </nav>

        {children}

      </body>
    </html>
  )
}
