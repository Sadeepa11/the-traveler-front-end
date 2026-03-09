import { HomeIcon, UserIcon, PhoneIcon, BookOpenIcon } from "lucide-react"
import logo from "../assets/react.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
// import { Text } from "lucide-react"
import { FaBars, FaTimes } from "react-icons/fa"
const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)


    const navLinks = [
        { title: "Home", href: "/", Icon: <HomeIcon className="inline-block text-black" /> },
        { title: "About", href: "/about", Icon: <UserIcon className="inline-block text-black" /> },
        { title: "Contact", href: "/contact", Icon: <PhoneIcon className="inline-block text-black" /> },
        { title: "Blog", href: "/blog", Icon: <BookOpenIcon className="inline-block text-black" /> },
    ]

    return (
        <aside className={`min-h-screen ${isOpen ? "w-64" : "w-16"} bg-gray-300 text-white transition-all duration-300`}>
            <div className="w-full m-0 p-3 flex justify-between items-center bg-gray-400 ">
                <img src={logo} alt="" />

                {isOpen && (

                    <>
                        <h1 className="text-2xl font-bold">Blog</h1>

                        <button onClick={() => setIsOpen(!isOpen)}>
                            <FaTimes />
                        </button>
                    </>

                )}





            </div>

            <nav className="" >

                <ul className="grid gap-7">
                    {
                        navLinks.map(
                            (item, index) => (
                                <li key={index} className="flex items-center gap-2 mt-2 bg-gray-400 p-2 justify-center">


                                    <Link className="" to={item.href}> {item.Icon} {isOpen ? <text>{item.title}</text> : ""}</Link>

                                </li>
                            )
                        )}

                    {!isOpen ?

                        < li className="flex justify-center" >

                            <button onClick={() => setIsOpen(!isOpen)}>
                                <FaBars className="text-black" />
                            </button>
                        </li> : ""
                    }

                </ul>


            </nav>

        </aside >
    )
}

export default Sidebar