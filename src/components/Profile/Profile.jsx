import React, {useState, useContext, useEffect} from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { UserContext} from '../../context/user-context'
import { Button } from '@material-ui/core';
import  UserService   from '../../service/user-service';
import  StoreService   from '../../service/store-service';
import {useTranslation } from 'react-i18next'
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: '#FE6B8B',
  },
  form: {
    width: '100%',
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
  update:{
    background: '#E59500'
  }
}));

const ProfileView = () =>{
  const classes = styles();
  const history = useHistory();
  const [user] = useContext(UserContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {t} = useTranslation()
  const [setError] = useState("")
  const isUserAdmin = user.isAdmin
  const[storeUser, setStoreUser] = useState("")

  const[storeName, setStoreName] = useState("")
  const[activity, setActivity] = useState("")
  const[covDistance, setCovDistance] = useState("")

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  const validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    setError('Por favor, introduzca un email válido.');
    return false;
}

  const handleClickUpdate = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(email) && isEmpty(password)) {
      setError('Por favor, complete todos los campos.')
      console.log("sale por aca")
    } else {
        console.log(activity)
        console.log(covDistance)
        console.log( covDistance > 0)
        if ( true) {
          
          UserService.updateUser(name, email, password)
          
          
           .then(
            history.push(`/profile`)
          // StoreService.updateStore(name, activity, storeUser.street, storeUser.number , storeUser.locality, storeUser.latitude, storeUser.longitude, covDistance)
         //     .then(response =>  history.push(`/profile`))
         //     .catch( e => console.log(e))
              )
              .catch( e => console.log(e))
        }   else {console.log("sale por aca por")} 
    }
  }

  useEffect(() => {    
    const fetchData = async () => {

       const resStore = await StoreService.getStoreById(user.idStore)
       setStoreUser(resStore.data)
    }
    fetchData();
  },[user]);
  

    return (
        <div className="container">
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            {t("Profile.Profile1")}
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    helperText= {t("RegisterStore.Current") + user.name}
                    label= {t("RegisterStore.Name")}
                    autoFocus
                    onChange={(ev) => setName(ev.target.value)} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    helperText= {t("RegisterStore.Current") + user.email}
                    label={t("RegisterStore.Email")}
                    name="email"
                    autoComplete="email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label={t("RegisterStore.Password")}
                    name="password"
                    autoComplete="password"
                    type="password"
                  onChange={(ev) => setPassword(ev.target.value)}
                  />
                </Grid>
                
              </Grid>
            </form>
          </div>
        
          <p></p>
          {isUserAdmin ? 

                            <Container component="main" maxWidth="xs">
                            <Typography component="h1" variant="h5">
                            {t("Profile.UpdateStoreData")}
                            </Typography>

                            <form className="{classes.form}" noValidate>
                                    <Grid container spacing={12}>
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
                                          labelId={t("RegisterStore.Coverage")}
                                          fullWidth
                                          id="covDistance"
                                          label=  {t("RegisterStore.Coverage")}
                                          helperText= {t("RegisterStore.Current") + storeUser.covDistance}
                                          name="activity"                        
                                      onChange={(ev) => setCovDistance(ev.target.value)}
                                        />
                                      </Grid >
                                    </Grid>
                                     </form>
                                  </Container>                                                                      
                                      : null }
                                <Button 
                                        type="submit"
                                        fullWidth
                                        className={classes.update} 
                                        onClick={ (ev) => handleClickUpdate(ev)}
                                      >{t("Profile.Update")}
                                </Button>
                              </Container>

        
        </div>
  )
}

export default withRouter(ProfileView);