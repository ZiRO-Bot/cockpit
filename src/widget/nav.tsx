import Image from "next/image"
import logo from "/public/static/logo.png"

export const NavBar = () => {
    return (
        <div className="z-50 sticky top-0">
            <nav className="backdrop-blur px-1.5 lg:px-4">
                <div className="h-16 w-full flex items-center">
                    <Image alt="Bot's logo" src={logo} className="h-12 w-12" />
                    <a>Hello</a>
                </div>
            </nav>
        </div>
    )
}
