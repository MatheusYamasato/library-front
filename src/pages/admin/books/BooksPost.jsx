import * as React from 'react';
import { useState } from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  button: { margin: theme.spacing(1),},
}));

const BooksPost = () => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  async function handleSubmit() {
    const data = {
      image: url,
      title: title,
      author: author,
      category: category,
      price: price
    }
    const response = await api.post('/books', data)
    if(response.status === 201) {
      window.location.href = '/admin/livros'
    } else {
      alert('Erro ao cadastrar o livro')
    }
  }
  const classes = useStyles();
  return (
    
      <Box display="flex" flexDirection="column" component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h1>Cadastro de Livro</h1>
        <TextField id="image" required name="image" value={url} onChange={e => setUrl(e.target.value)} label="URL da Imagem" variant="standard" />
        <TextField id="title" required name="title" value={title} onChange={e => setTitle(e.target.value)} label="Titulo" variant="standard" />
        <TextField id="author" required name="author" value={author} onChange={e => setAuthor(e.target.value)} label="Autor" variant="standard" />
        <TextField id="category" required name="category" value={category} onChange={e => setCategory(e.target.value)} label="Categoria" variant="standard" />
        <TextField id="price" required name="price" value={price} onChange={e => setPrice(e.target.value)} label="Preço (valor em centavos)" variant="standard" />
        <Button variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
            Cadastrar
        </Button>
      </Box>
    
  );
}

export default BooksPost