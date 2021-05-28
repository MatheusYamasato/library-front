import React, { useState } from 'react';
import api from '../../../services/api'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function SalesPost() {
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [idBook, setIdBook] = useState("");
  const [idUser, setIdUser] = useState("");

  async function handleSubmit() {
    const data = {
      status: status,
      price: price,
      id_book: idBook,
      id_user: idUser,
    };
    const response = await api.post("/sales", data);
    if (response.status === 201) {
      window.location.href = "/admin/vendas";
    } else {
      alert("Erro ao cadastrar a venda");
    }
  }
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <h1>Cadastro de Venda</h1>
      <TextField
        id="status"
        required
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        label="Status da Venda"
        variant="standard"
      />
      <TextField
        id="price"
        required
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        label="Preço(em centavos)"
        variant="standard"
      />
      <TextField
        id="id_book"
        required
        name="id_book"
        value={idBook}
        onChange={(e) => setIdBook(e.target.value)}
        label="ID Book"
        variant="standard"
      />
      <TextField
        id="id_user"
        required
        name="id_user"
        value={idUser}
        onChange={(e) => setIdUser(e.target.value)}
        label="ID Usuário"
        variant="standard"
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        color="primary"
        className={classes.button}
      >
        Cadastrar
      </Button>
    </Box>
  );
}
