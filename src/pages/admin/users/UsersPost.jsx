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

export default function UsersPost() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipCode] = useState("");

  async function handleSubmit() {
    const data = {
      name: name,
      email: email,
      zipcode: zipcode,
    };
    const response = await api.post("/users", data);
    if (response.status === 201) {
      window.location.href = "/admin/usuarios";
    } else {
      alert("Erro ao cadastrar o usuário");
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
      <h1>Cadastro de Usuário</h1>
      
      <TextField
        id="name"
        required
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nome"
        variant="standard"
      />
        <TextField
        id="email"
        required
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="E-mail"
        variant="standard"
      />
      <TextField
        id="zipCode"
        required
        name="zipCode"
        value={zipcode}
        onChange={(e) => setZipCode(e.target.value)}
        label="CEP"
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