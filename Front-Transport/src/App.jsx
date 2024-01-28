import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/global.css'
import Nav from './components/nav';
import Reportes from './components/reportes';
import Reservacion from './components/reservacion';
import Configuracion from './components/configuracion';
import Transportacion from './components/transportacion';

const AnimatedRoutes = () => {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes>
                    <Route path="/" element={ <Configuracion /> } />
                    <Route path="/Configuracion" element={ <Configuracion /> } />
                    <Route path="/Reportes" element={ <Reportes /> } />
                    <Route path="/Reservacion" element={ <Reservacion /> }/>
                    <Route path="/Transportacion" element={ <Transportacion /> } />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

const App = () => {
    const [isOpen, setIsOpen] = useState(true); // Añade un estado para controlar si el Sidebar está abierto o no

    return (
        <Router>
            <div>
               
                <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
                <AnimatedRoutes />
            </div>
        </Router>
    );
}

export default App;

