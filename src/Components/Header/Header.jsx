import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link className={style.link} to="/livros">Livros</Link>
                <Link className={style.link} to="/usuarios">Usuários</Link>
                <Link className={style.link} to="/operadores">Operadores</Link>
                <Link className={style.link} to="/vendas">Vendas</Link>
            </nav>
        </header>
    )
}
