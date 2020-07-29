import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button/index'
//import ButtonLink from '../components/ButtonLink/index'

function Menu() {
    return (
    <nav className="Menu">
        <Link to="/">
            <img className="Logo" src={Logo} alt="Aluraflix logo"/>
        </Link>

        <Button as={Link} to="/cadastro/video" className ="ButtonLink">
            Novo vídeo
        </Button>
    </nav>
    );
}

export default Menu

