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

export default function SalesTable() {
  const converter = (valor) => {
    const valorConvertido = (valor / 100).toFixed(2)
    return valorConvertido
  }

  const [sales, setSales] = useState([])
    
  useEffect(() => {
    buscaLivros(`/sales`, setSales)
  }, [])
    
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">ID Livro</TableCell>
            <TableCell align="center">ID Usuário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sales.map(sale => (
            <TableRow key={sale.id}>
              <TableCell component="th" scope="row">
                {sale.id}
              </TableCell>
              <TableCell align="center">{sale.status}</TableCell>
              <TableCell align="center">R${converter(sale.price)}</TableCell>
              <TableCell align="center">{sale.id_book}</TableCell>
              <TableCell align="center">{sale.id_user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}