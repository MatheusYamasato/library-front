import React from 'react'
import SalesTable from '../SalesTable/SalesTable'
import { Link } from 'react-router-dom'

export const Sales = () => {    
    return (
        <main>
            <Link to="/vendas/inserirvenda">Inserir Livro</Link>
            <Link to="/vendas/alterarvenda">Alterar Livro</Link>
            <SalesTable />
        </main>
    )
}