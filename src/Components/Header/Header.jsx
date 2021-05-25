import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <Link to="/livros">Livros</Link>
                <Link to="/usuarios">Usuários</Link>
                <Link to="/operadores">Operadores</Link>
                <Link to="/vendas">Vendas</Link>
            </nav>
        </header>
    )
}
