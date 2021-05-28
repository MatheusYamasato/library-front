import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link className={style.logoContainer} exact to="/admin"><img src={logo} alt="Logo da livraria"/></Link>
                <Link className={style.link} to="/admin/livros">Livros</Link>
                <Link className={style.link} to="/admin/usuarios">Usuários</Link>
                <Link className={style.link} to="/admin/operadores">Operadores</Link>
                <Link className={style.link} to="/admin/vendas">Vendas</Link>
            </nav>
        </header>
    )
}
