import { useState, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import Logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import '../App.css'


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSearch, setIsSearch] = useState('')
    const [search, setSearch] = useState(false)

  const NavLinks = [
    {to: "/", label: "Home"},
    {to: "/", label: "Packages"},
    {to: "/about", label: "About"},
    {to: "/contact", label: "Contact"},
    {to: "/blog", label: "Blog"},
  ]


    useEffect(() => {


        


        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <nav className={`p-4 w-full fixed z-20 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent'}`}>
            <div className="container flex justify-between items-center">
                <div>
                    <img src={Logo} alt="" className='w-[50%] h-[50%] object-contain' />
                </div>
                <div className='flex justify-between '>
                    <ul className='flex justify-between gap-10 text-xl flex justify-center items-center mogra-font'>
                        {NavLinks.map((link) => (
                            <Link to={link.to} key={link.label}>
                                <li className='font-bold '>{link.label}</li>
                            </Link>
                        ))}
                        <li className='relative flex items-center'>
                            {search ? (
                                <div className='relative flex items-center'>
                                    <input
                                        type="text"
                                        value={isSearch}
                                        onChange={(e) => setIsSearch(e.target.value)}
                                        placeholder='Search'
                                        className='backdrop-blur-md bg-white/10 border-1 border-white rounded-md px-3 py-1 pr-10 text-lg focus:border-2 focus:border-white outline-none text-white w-64 transition-all'
                                        autoFocus
                                    />
                                    <X
                                        className='absolute right-3 text-white cursor-pointer hover:scale-110 transition-transform'
                                        size={20}
                                        onClick={() => {
                                            setSearch(false)
                                            setIsSearch('')
                                        }}
                                    />
                                </div>
                            ) : (
                                <Search className='text-white cursor-pointer hover:scale-110 transition-transform' onClick={() => setSearch(true)} />
                            )}
                        </li>
                        <li><button className={`${isScrolled ? 'text-black bg-white' : 'text-white bg-black'} px-10 py-3 font-bold sansitaText transition-all transform hover:scale-105 active:scale-95 shadow-md uppercase text-sm`}>Get your 120$ christmas gift</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

