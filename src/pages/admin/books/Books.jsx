import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import api from '../../../services/api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Books() {
    const converter = (valor) => {
        const valorConvertido = (valor / 100).toFixed(2)
        return valorConvertido
    }

    const [books, setBooks] = useState([])
    
    useEffect(() => {
      async function getBooks() {
        const response = await api.get('/books')
        setBooks(response.data)
      }
      getBooks()
    }, []);
    
  const classes = useStyles();

  return (
    <main> 
    <Link exact to="/admin/livros/inserirlivro">Inserir Livro</Link>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Titulo</TableCell>
            <TableCell align="center">Autor</TableCell>
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Opção</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {book.id}
              </TableCell>
              <TableCell align="center">{book.title}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
              <TableCell align="center">{book.category}</TableCell>
              <TableCell align="center">R$ {converter(book.price)}</TableCell>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button href={'/admin/livros/alterarlivro/'+book.id} color="primary">Atualizar</Button>
              </ButtonGroup>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  );
}