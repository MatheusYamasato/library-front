import React from 'react'
import UsersTable from '../UsersTable/UsersTable'
import { Link } from 'react-router-dom'

export const Users = () => {
    return (
        <main> 
            <Link to="/usuarios/inserirlivro">Inserir Usuário</Link>
            <Link to="/usuarios/alterarlivro">Alterar Usuário</Link>
            <Link to="/usuarios/deletarlivro">Deletar Usuário</Link>
            <UsersTable />
        </main>
    )
}
