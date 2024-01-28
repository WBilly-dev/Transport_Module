import{ useState } from "react";
import '../styles/Nav.css'
import Sidebar from './sidebar'; // Asegúrate de importar tu componente Sidebar

const Nav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Estado inicial del sidebar abierto

    const handleToggleMenuClick = () => {
        setSidebarOpen(!sidebarOpen); // Cambia el estado del sidebar cada vez que se hace clic en el toggle-menu
    }

    return (
        <div className="content">
            <nav>
                <i id='toggle-menu' className='bx bx-menu' onClick={handleToggleMenuClick}></i> {/* Manejador de eventos al hacer clic en el toggle-menu */}
                <input type="checkbox" id="theme-toggle" hidden />
            </nav>
            <Sidebar isOpen={sidebarOpen} /> {/* Pasa el estado sidebarOpen como una propiedad al componente Sidebar */}
        </div>
    );
}

export default Nav;