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

export default function BooksPut() {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const { idLivro } = useParams()
  
  useEffect(() => {
    async function getBook() {
        let livro = await api.get('/books/'+idLivro)
        setUrl(livro.data[0].image)
        setTitle(livro.data[0].title)
        setAuthor(livro.data[0].author)
        setCategory(livro.data[0].category)
        setPrice(livro.data[0].price) 
    }
    getBook()
  }, [])
  
  async function handleSubmit() {
    const data = {
      image: url,
      title: title,
      author: author,
      category: category,
      price: price,
      id: idLivro
    }
    console.log(data)
    const response = await api.put('/books/'+idLivro, data)
    if(response.status === 200) {
      window.location.href = '/admin/livros'
    } else {
      alert('Erro ao alterar o livro')
    }
  }
  const classes = useStyles();
  return (
    
      <Box display="flex" flexDirection="column" component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <h2>Atualização do Livro</h2>
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