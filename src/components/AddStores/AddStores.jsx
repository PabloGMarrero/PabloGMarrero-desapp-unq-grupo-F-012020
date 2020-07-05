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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
  },
  dropdown:{
    minWidth: "100%",
  }
}));

const RegisterStore = () =>{
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
    if (isEmpty(name) && isEmpty(activity) && isEmpty(longitude)
    && isEmpty(latitude) && isEmpty(street) && isEmpty(number)) {
      setError('Por favor, complete todos los campos.')
      
    } else {
            storeService.addStore(name, activity, street, number , locality, latitude, longitude, covDistance)
              .then(response =>  
                console.log(response.data) 
                || history.push(`/home`))
              .catch( e => console.log(e))

    }
  }

  return (
        <Box className="container">
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box className={classes.paper}>
            <Typography component="h1" variant="h5">
              {t("RegisterStore.AddStore")}
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
                    label= {t("RegisterStore.Name")}
                    autoFocus
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
                  <MenuItem value={t("Stores.Grocery")} >{t("Stores.Grocery")}</MenuItem>
                  <MenuItem value={t("Stores.Store")} >{t("Stores.Store")}</MenuItem>
                  <MenuItem value={t("Stores.Butcher")}>{t("Stores.Butcher")}</MenuItem>
                  <MenuItem value={t("Stores.Greengrocery")}>{t("Stores.Greengrocery")}</MenuItem>
                  <MenuItem value={t("Stores.Bakery")}>{t("Stores.Bakery")}</MenuItem>
                  <MenuItem value={t("Stores.Pharmacy")}>{t("Stores.Pharmacy")}</MenuItem>
                  <MenuItem value={t("Stores.Ironmongery")}>{t("Stores.Ironmongery")}</MenuItem>
                  <MenuItem value={t("Stores.Others")}>{t("Stores.Others")}</MenuItem>
                </Select>
                  {/* <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="activity"
                    label={t("RegisterStore.Activity")}
                    name='Actividad'
                    autoComplete="activity"
                    onChange={(ev) => setActivity(ev.target.value)}
                  /> */}
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