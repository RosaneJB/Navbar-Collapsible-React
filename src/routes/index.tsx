import { Route, Routes } from "react-router-dom"
import { Home, About, Contact, Portifolio, Services, Team } from "../pages"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portifolio" element={<Portifolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
        </Routes>
    )
}