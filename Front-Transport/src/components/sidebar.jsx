import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../styles/Sidebar.css'
import PropTypes from 'prop-types';


const Sidebar = ({ isOpen }) => {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    return (
        <div className={`sidebar ${isOpen ? '' : 'close'}`}>

            <ul className="side-menu">
                <li className={activePath === "/Configuracion" ? "active" : ""}><Link to="/Configuracion" onClick={() => setActivePath("/Configuracion")}><i className='bx bx-cog'></i>Configuración</Link></li>
                <li className={activePath === "/Reportes" ? "active" : ""}><Link to="/Reportes" onClick={() => setActivePath("/Reportes")}><i className='bx bxs-report' ></i>Reportes</Link></li>
                <li className={activePath === "/Reservacion" ? "active" : ""}><Link to="/Reservacion" onClick={() => setActivePath("/Reservacion")}><i className='bx bx-user-check' ></i>Reservación</Link></li>
                <li className={activePath === "/Transportacion" ? "active" : ""}><Link to="/Transportacion" onClick={() => setActivePath("/Transportacion")}><i className='bx bxs-car'></i>Transportación</Link></li>
            </ul>
            <ul className="side-menu">
                <li>
                    <Link to="#" className="logout">
                        <i className='bx bx-log-out-circle'></i>
                        Exit
                    </Link>
                </li>
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
  };

export default Sidebar;
