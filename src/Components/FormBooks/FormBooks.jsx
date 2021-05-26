import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import ButtonForm from '../ButtonForm/ButtonForm'


const FormBooks = () => {
  return (
    <Box component="form" onSubmit={cadastrar} sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" name="image" label="Standard" variant="standard" />
      <TextField id="standard-basic" name="title" label="Standard" variant="standard" />
      <TextField id="standard-basic" name="author" label="Standard" variant="standard" />
      <TextField id="standard-basic" name="category" label="Standard" variant="standard" />
      <TextField id="standard-basic" name="price" label="Standard" variant="standard" />
      <ButtonForm />
    </Box>
  );
}

export default FormBooks