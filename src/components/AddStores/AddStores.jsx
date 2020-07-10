import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation } from 'react-i18next'
import storeService from '../../service/store-service'
import Alert from '@material-ui/lab/Alert';


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
  },
  dropdown:{
    minWidth: "100%",
  }
}));

const RegisterStore = () =>{
  const classes = styles();

  const [activity, setActivity] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [locality, setLocality] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [covDistance, setCovDistance] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const history = useHistory();
  const [error, setError] = useState("")

  const {t} = useTranslation()

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }
  
  const handleClickAddStore = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(activity) && isEmpty(longitude)
    && isEmpty(latitude) && isEmpty(street) && isEmpty(number)&& isEmpty(covDistance)) {
      setError(t("Stores.CompleteFormStores"))
      
    } else {
            storeService.addStore(name, activity, street, number , locality, latitude, longitude, covDistance, email, password)
              .then(response =>  
                history.push(`/home`))
              .catch(e => {
                handleError(e)
              })
    }
  }

  const handleError = e => {
    if (e.response.status === 409){
      setError(t("Register.AlreadyExists"))
    }
  }

  return (
        <Box className="container">
          <Container component="main" maxWidth="xs">
          {error ?
          <Alert severity="error">{error}</Alert>
          :
            null
          }
          <CssBaseline />
          <Box className={classes.paper}>
            <Typography component="h1" variant="h5">
              {t("RegisterStore.AddStore")}
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                    autoFocus
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label= {t("RegisterStore.Email")}
                    name='Email'
                    autoComplete="email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label= {t("RegisterStore.Password")}
                    name='password'
                    autoComplete="password"
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="NameStore"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label= {t("RegisterStore.NameStore")}
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    labelId={t("RegisterStore.Activity")}
                    id="activity"
                    displayEmpty
                    value={activity}
                    className= {classes.dropdown}
                    onChange={(ev) => setActivity(ev.target.value)}
                    >
                    <MenuItem value={"Kiosco"} >{t("Stores.Grocery")}</MenuItem>
                    <MenuItem value={"Almacen"} >{t("Stores.Store")}</MenuItem>
                    <MenuItem value={"Carnicería"}>{t("Stores.Butcher")}</MenuItem>
                    <MenuItem value={"Verdulería"}>{t("Stores.Greengrocery")}</MenuItem>
                    <MenuItem value={"Panadería"}>{t("Stores.Bakery")}</MenuItem>
                    <MenuItem value={"Farmacia"}>{t("Stores.Pharmacy")}</MenuItem>
                    <MenuItem value={"Ferretería"}>{t("Stores.Ironmongery")}</MenuItem>
                    <MenuItem value={"Otros"}>{t("Stores.Others")}</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="address"
                    label= {t("RegisterStore.Street")}
                    name='Calle'
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
                    label= {t("RegisterStore.Number")}
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
                    label= {t("RegisterStore.Locality")}
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
                    id="latitude"
                    label= {t("RegisterStore.Latitude")}
                    name="latitude"
                    autoComplete="latitude"
                   onChange={(ev) => setLatitude(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Longitud"
                    label= {t("RegisterStore.Longitude")}
                    name="Longitud"
                    autoComplete="longitud"
                    onChange={(ev) => setLongitude(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="covDistance"
                    label={t("RegisterStore.Coverage")}
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

export default withRouter(RegisterStore);