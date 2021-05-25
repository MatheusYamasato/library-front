import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { Books } from './Components/Books/Books';
import { Header } from './Components/Header/Header';
import './App.css'

function App() {
  return (
    <div className="div">
      <Routes>
        <Header />
        <Switch>

        <Route path="/livros">
          <Books />
        </Route>

        {/* <Route path="/usuarios">
          <Usuarios />
        </Route>

        <Route path="/operadores">
          <Opeadores />
        </Route>

        <Route path="/vendas">
          <Vendas />
        </Route> */}


        </Switch>
      </Routes>
    </div>
  );
}     

export default App;
