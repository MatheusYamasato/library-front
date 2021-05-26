import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Books } from './Components/Books/Books';
import { Users } from './Components/Users/Users';
import { Sales } from './Components/Sales/Sales';
import { Operators } from './Components/Operators/Operators';
import FormBooks from './Components/FormBooks/FormBooks';
import './App.css'

function App() {
  return (
    <div className="div">
      <Routes>
        <Header />
        <Switch>

        <Route exact path="/livros">
          <Books />
        </Route>

        <Route exact path="/usuarios">
          <Users />
        </Route>

        <Route exact path="/vendas">
          <Sales />
        </Route>

        <Route exact path="/operadores">
          <Operators />
        </Route>

        <Route path="/livros/inserirlivro">
          <FormBooks />  
        </Route> 
        </Switch>
      </Routes>
    </div>
  );
}     

export default App;
