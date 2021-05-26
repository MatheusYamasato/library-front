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
    const [operators, setOperators] = useState([])
    
    useEffect(() => {
      buscaLivros(`/operators`, setOperators)
    }, [])
    
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operators.map(operator => (
            <TableRow key={operator.id}>
              <TableCell component="th" scope="row">
                {operator.id}
              </TableCell>
              <TableCell align="center">{operator.email}</TableCell>
              <TableCell align="center">{operator.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}