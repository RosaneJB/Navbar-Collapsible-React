import { useState } from "react"
import { NavbarCollapsible } from "./components/navbarCollapsible"
import './style.css'
type LayoutProps = {
    children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true)
    return (
        <>
            <header>
                <NavbarCollapsible isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
            </header>
            <main onClick={() => setIsNavbarOpen(false)}>
                {children}
            </main>
            <footer>Meu footer</footer>
        </>
    )
}