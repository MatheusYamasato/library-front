import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../services/api'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: { margin: theme.spacing(1),},
}));

export default function OperatorsPut() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')

  const { idOperador } = useParams()
  
  useEffect(() => {
    async function getOperator() {
        let operador = await api.get('/operators/'+idOperador)
        setName(operador.data[0].name)
        setEmail(operador.data[0].email)
        setPassword(operador.data[0].password)
        setType(operador.data[0].type) 
    }
    getOperator()
  }, [])
  
  async function handleSubmit() {
    const data = {
      name: name,
      email: email,
      password: password,
      type: type,
      id: idOperador
    }
    console.log(data);
    const response = await api.put('/operators/'+idOperador, data)
    if(response.status === 200) {
      window.location.href = '/admin/operadores'
    } else {
      alert('Erro ao alterar o operador')
    }
  }
  const classes = useStyles();
  return (
    
      <Box display="flex" flexDirection="column" component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Atualização do Operador</h2>
        <TextField id="name" required name="name" value={name} onChange={e => setName(e.target.value)} label="Nome" variant="standard" />
        <TextField id="email" required name="email" value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="standard" />
        <TextField id="password" required name="password" value={password} onChange={e => setPassword(e.target.value)} label="Senha" variant="standard" />
        <TextField id="type" required name="type" value={type} onChange={e => setType(e.target.value)} label="Tipo(1-Admin/ 2-Usuário)" variant="standard" />
        <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
            Atualizar
        </Button>
      </Box>
  );
}