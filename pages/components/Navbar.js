import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex hidden h-[4em] bg-[#2a2e35] items-center justify-between px-8">
        <div className="text-white font-bold text-xl md:text-2xl">
          Jeremy Status
        </div>
        <ul className="flex space-x-9  font-bold text-xl text-[#b2becd]">
          <li className="cursor-default text-[#b2becd]">Contact</li>
          <li>
            <a
              href="https://github.com/pp3times/jerestatus"
              rel="noopener noreferrer"
              target="_blank"
							className='text-white'
            >
              github
            </a>
          </li>
          {/* <li>Language</li> */}
        </ul>
      </nav>
      <nav className="md:hidden h-[4em] bg-[#2a2e35] flex items-center justify-center px-8">
        <div className="text-white font-bold text-xl md:text-2xl">
          Jeremy Status
        </div>
      </nav>
    </div>
  )
}

export default Navbar
