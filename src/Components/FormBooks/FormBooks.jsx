import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import ButtonForm from '../ButtonForm/ButtonForm'

const FormBooks = () => {
  return (
    <Box display="flex" flexDirection="column" component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
      <TextField id="standard-basic" name="image" label="URL da Imagem" variant="standard" />
      <TextField id="standard-basic" name="title" label="Titulo" variant="standard" />
      <TextField id="standard-basic" name="author" label="Autor" variant="standard" />
      <TextField id="standard-basic" name="category" label="Categoria" variant="standard" />
      <TextField id="standard-basic" name="price" label="Preço (valor em centavos)" variant="standard" />
      <ButtonForm />
    </Box>
  );
}

export default FormBooks