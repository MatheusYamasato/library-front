import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import style from './Users.module.css';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../services/api';
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
  table: {minWidth: 650,},
});

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('/users')
      setUsers(response.data)
    }
    getUsers()
  }, []);

  async function handleDelete(id) {
    if(window.confirm("Deseja realmente excluir este livro?")) {
      let response = await api.delete('users/'+id)
      if(response.status === 200) {
        window.location.href = '/admin/usuarios'
      } else {
        alert('Ocorreu um erro! Por favor, tente novamente')
      }
    }
  }

  const classes = useStyles();

  return (
    <>
    <main>
      <Link className={style.link2} to="/admin/usuarios/inserirusuario">
        Inserir Usuário
      </Link>
    </main>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">CEP</TableCell>
              <TableCell align="center">Opção</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.zipcode}</TableCell>
                <TableCell align="center">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button href={'/admin/usuarios/alterarusuario/'+user.id} color="primary">Atualizar</Button>
                <Button onClick={() => handleDelete(user.id)} color="danger">Excluir</Button>
                </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );  
}