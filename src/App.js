import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from './pages/admin/books/Books'
import BooksID from './pages/admin/books/BooksID'
import BooksPost from './pages/admin/books/BooksPost'
import BooksPut from './pages/admin/books/BooksPut'
import Operators from './pages/admin/operators/Operators'
import OperatorsPost from './pages/admin/operators/OperatorsPost'
import OperatorsPut from './pages/admin/operators/OperatorsPut'
import Sales from './pages/admin/sales/Sales'
import SalesPost from './pages/admin/sales/SalesPost'
import SalesPut from './pages/admin/sales/SalesPut'
import Users from './pages/admin/users/Users'
import UsersPost from './pages/admin/users/UsersPost'
import UsersPut from './pages/admin/users/UsersPut'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Header from './Components/Header/Header'
import Login from './pages/client/home/Login'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
                <Route exact path="/admin/livros" component={Books} />
                <Route exact path="/admin/livros/inserirlivro" component={BooksPost} />
                <Route exact path="/admin/livros/alterarlivro/:idLivro" component={BooksPut} />
                <Route exact path="/admin/livros/:idLivro" component={BooksID} />
                <Route exact path="/admin/usuarios" component={Users} />
                <Route exact path="/admin/usuarios/inserirusuario" component={UsersPost} />
                <Route exact path="/admin/usuarios/alterarusuario/:idUsuario" component={UsersPut} />
                <Route exact path="/admin/vendas" component={Sales} />
                <Route exact path="/admin/vendas/inserirvenda" component={SalesPost} />
                <Route exact path="/admin/vendas/alterarvenda/:idVenda" component={SalesPut} />
                <Route exact path="/admin/operadores" component={Operators} />
                <Route exact path="/admin" component={Dashboard} />
                <Route exact path="/admin/operadores/alteraroperador/:idOperador" component={OperatorsPut} />
                <Route exact path="/admin/operadores/inseriroperador" component={OperatorsPost} />
            </Switch>
        </BrowserRouter>
        <BrowserRouter> 
              <Switch>  
                <Route exact path="/login" component={Login} />
              </Switch>
        </BrowserRouter>
      </>
  );
}     

export default App;
