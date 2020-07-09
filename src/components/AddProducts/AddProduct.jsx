import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import {useTranslation } from 'react-i18next'
import productService from '../../service/product-service';


const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: '#E59500',
  },
  form: {
    width: '100%',
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
  register:{
    background: '#E59500'
  }
}));

const AddProductView = () =>{
  const classes = styles();
  const history = useHistory();
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [imagenUrl, setImagenUrl] = useState("")
  const [price, setPrice] = useState("")
  const [store, setStore] = useState("")
  const [setError] = useState("")
  const {t} = useTranslation()

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  const handleClickAddProductToStore = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(brand) && isEmpty(price) && isEmpty(store)) {
      setError('Por favor, complete todos los campos.')
      
    } else {
            productService.addProductToStore(name, brand, imagenUrl, price , store)
              .then(response =>  history.push(`/home`))
              .catch( e => console.log(e))
    }
  }
 
  return (
        <Box className="container">
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={classes.paper}>
            <Typography component="h1" variant="h5">
              Agregar Producto
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label= 'Nombre'
                    autoFocus
                   onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Marca"
                    label='Marca'
                    name="Marca"
                    autoComplete="Marca"
                    onChange={(ev) => setBrand(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="price"
                    label= 'Precio'
                    name="price"
                    autoComplete="price"
                   onChange={(ev) => setPrice(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="imageurl"
                    label= 'Imagen'
                    name="imageurl"
                    autoComplete="imageurl"
                   onChange={(ev) => setImagenUrl(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="store"
                    label= 'Comercio'
                    name="store"
                    autoComplete="store"
                   onChange={(ev) => setStore(ev.target.value)}
                  />
                </Grid>
                <Button 
                type="submit"
                fullWidth
                className={classes.register} 
               onClick={ (ev) => handleClickAddProductToStore(ev)}
                >Agregar Producto
              </Button>
              </Grid>
              
            </form>
          </Box>
        </Container>
        </Box>
  )
}

export default withRouter(AddProductView);