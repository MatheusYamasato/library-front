import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createBook } from '../../api/api'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ButtonForm = () => {
    const classes = useStyles();
  
    return (
        <Button onClick={createBook} variant="contained" color="primary" className={classes.button}>
            Send
        </Button>
    );
}

export default ButtonForm