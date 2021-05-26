import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { buscaLivros } from '../../api/api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function OperatorsTable() {
    const converter = (valor) => {
        const valorConvertido = (valor / 100).toFixed(2)
        return valorConvertido
    }

    const [books, setBooks] = useState([])
    
    useEffect(() => {
      buscaLivros(`/books`, setBooks)
    }, [])
    
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Titulo</TableCell>
            <TableCell align="center">Autor</TableCell>
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Preço</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}