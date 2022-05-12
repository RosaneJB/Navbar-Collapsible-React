import { Link } from "react-router-dom"

type NavbarCollapsibleProps = {
    isNavbarOpen: boolean
    setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const NavbarCollapsible = ({ isNavbarOpen, setIsNavbarOpen }: NavbarCollapsibleProps) => {

    return (
        <header id="header">
            <Link to="/" className="logo">Logo</Link>
            <div className={`${isNavbarOpen ? 'active' : ''}`} id="toggle" onClick={() => setIsNavbarOpen(!isNavbarOpen)}></div>
            <div className={`${isNavbarOpen ? 'active' : ''}`} id="navbar">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/portifolio">Portifolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}