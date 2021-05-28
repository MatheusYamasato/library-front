import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function Operators() {
    const [operators, setOperators] = useState([])
    
    useEffect(() => {
      async function getOperators() {
        const response = await api.get('/operators')
        console.log(response.data);
        setOperators(response.data)
      }
      getOperators()
    }, []);
    
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operators.map(operator => (
            <TableRow key={operator.id}>
              <TableCell component="th" scope="row">
                {operator.id}
              </TableCell>
              <TableCell align="center">{operator.name}</TableCell>
              <TableCell align="center">{operator.email}</TableCell>
              <TableCell align="center">{operator.type}</TableCell>
              <ButtonGroup  color="primary" aria-label="outlined primary button group">
                <Button href={'/admin/operadores/alteraroperador/'+operator.id} color="primary">Atualizar</Button>
              </ButtonGroup>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}