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

export default function OperatorsPost() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit() {
    const data = {
        name: name,
        email: email,
        password: password,
        type: type
    };
    const response = await api.post("/operators", data);
    if (response.status === 201) {
      window.location.href = "/admin/operadores";
    } else {
      alert("Erro ao cadastrar o operador");
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
      <h1>Cadastro de Operador</h1>
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
        label="Email"
        variant="standard"
      />
      <TextField
        id="password"
        required
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Senha"
        type="password"
        variant="standard"
      />
      <TextField
        id="type"
        required
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        label="Tipo"
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