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
import storeService from '../../service/store-service';


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

const AddStoreView = () =>{
  const classes = styles();
  const [name, setName] = useState("")
  const [activity, setActivity] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [locality, setLocality] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [covDistance, setCovDistance] = useState("")

  const history = useHistory();
  const [setError] = useState("")
  const {t} = useTranslation()

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }
  
  const handleClickAddStore = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(latitude) && isEmpty(longitude)
    && isEmpty(latitude) && isEmpty(street) && isEmpty(number)) {
      setError('Por favor, complete todos los campos.')
      
    } else {
            storeService.addStore(name, activity, street, number , locality, latitude, longitude, covDistance)
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
              Agregar Comercio
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
                    id="activity"
                    label='Actividad'
                    name="activity"
                    autoComplete="activity"
                    onChange={(ev) => setActivity(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= 'Calle'
                    name="address"
                    autoComplete="address"
                    onChange={(ev) => setStreet(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= 'Numero'
                    name="address"
                    autoComplete="address"
                    onChange={(ev) => setNumber(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= 'Localidad'
                    name="address"
                    autoComplete="address"
                    onChange={(ev) => setLocality(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= 'Latitud'
                    name="address"
                    autoComplete="address"
                   onChange={(ev) => setLatitude(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= 'Longitud'
                    name="address"
                    autoComplete="address"
                    onChange={(ev) => setLongitude(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="covDistance"
                    label={"Distancia Cobertura"}
                    type="covDistance"
                    id="covDistance"
                    autoComplete="covDistance"
                  onChange={(ev) =>setCovDistance(ev.target.value)}
                  />
                </Grid>
                <Button 
                type="submit"
                fullWidth
                className={classes.register} 
               onClick={ (ev) => handleClickAddStore(ev)}
                >Agregar Comercio
              </Button>
              </Grid>
              
            </form>
          </Box>
        </Container>
        </Box>
  )
}

export default withRouter(AddStoreView);