import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'

export const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link to="/"><img src={logo} alt="Logo da livraria"/></Link>
                <Link className={style.link} to="/livros">Livros</Link>
                <Link className={style.link} to="/usuarios">Usuários</Link>
                <Link className={style.link} to="/operadores">Operadores</Link>
                <Link className={style.link} to="/vendas">Vendas</Link>
            </nav>
        </header>
    )
}
