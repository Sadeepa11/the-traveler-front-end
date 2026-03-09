import NavBar from "./NavBar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col">
                <div className="hidden md:block w-full">
                    <NavBar />
                </div>
            </div>
            <main className="w-full flex-grow">
                <div className="w-full">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout