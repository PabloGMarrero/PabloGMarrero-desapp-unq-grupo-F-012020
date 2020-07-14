import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './ReviewForm';
import { PurchaseContext } from '../../context/purchase-context'
import { UserContext } from '../../context/user-context'
import { useTranslation } from 'react-i18next'
import { CoordenadasContext } from '../../context/location-context'
import purchaseService from '../../service/purchase-service'
import {useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert'


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#E59500'
  },
}));



function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


const Checkout = () =>{ 

  const {
    shoppingList,
    deliveryType,
    payMethod,
    street,
    number,
    city,
    setDate,
    state,
    zipCode,
    country,
    total

  } = useContext(PurchaseContext);

  const [coord] = useContext(CoordenadasContext)
  const history = useHistory()
  const {user} = useContext(UserContext)
  const { t } = useTranslation();
  const steps = [t("Checkout.Address"), t("Checkout.Payment"), t("Checkout.Review")];
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState("")
  const [error,setError] = useState("")
  const {dataFacebook} = useContext(UserContext);
  const isUserFacebook = dataFacebook.graphDomain === 'facebook'

  
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds


  var myDate = new Date();  
  var year = myDate.getFullYear();  
  var month = myDate.getMonth() + 1; 
  if(month <= 9)  month = '0'+month;  
  var day= myDate.getDate(); 
  if(day <= 9)  day = '0'+day;  

  var date1 = year +'-'+ month +'-'+ day;
  var time = hours + ":"+('0'  + min).slice(-2)+':'+('0' + sec).slice(-2);

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  const handleNext = () => {
    if (isUserFacebook ){
      setError(t("Checkout.ErrorFacebook"))
    }
     else
     { 
    if ((isEmpty(street) && isEmpty(number) && isEmpty(city) && isEmpty(state) && isEmpty(country)  && isEmpty(zipCode))
      || (activeStep === 1 && isEmpty(deliveryType) && isEmpty(payMethod))
    ) {
      setError(t("Checkout.MissingValues"))

    } 
    else if (isNaN(number))
      {
        setError(t("Checkout.ErrorNumber"))
      }
      else if (street.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))
      {
        setError(t("Checkout.ErrorString"))
      }
    else {
    setActiveStep(activeStep + 1);
    setDate(date1)
    }
  }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePurchase = () =>{    
    if ((total === 0) ){
      setError(t("Checkout.ValueZero"))
    } 
    else {
      purchaseService.newPurchase(purchase)
      .then(response => {
        setOrderNumber(response.data) 
        localStorage.setItem('prod_count', 0);
        localStorage.setItem('shopping_list', []);
        // localStorage.removeItem('prod_count');
        // localStorage.removeItem('shopping_list');
        handleNext()
      })
      .catch(err => console.log(err))
      
    }
  }

  const goToHome = () =>{
    history.push("/home")
  }

  const purchase = 
  {
    items: shoppingList,
    user: user,
    deliveryType: {
          type: deliveryType,
          date: date1,
          hour: time,
              address:{
                locality: city,
                street: street,
                number: number,
                geographicZone: {
                        latitude: coord.lat,
                        longitude: coord.lng
                }
             }
    },
    paymentMethod: payMethod,
  }

  return (
    <React.Fragment>
      {error ?
         
      
              <Alert severity="error">
              {error}
              </Alert>
        :
          null
        }
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                {t("Checkout.Thankyou")}
                </Typography>
                <Typography variant="subtitle1">
                {t("Checkout.Orderis")} {orderNumber}. 
                  {t("Checkout.SentMail")}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={goToHome}
                    className={classes.button}
                  >
                    { t("Checkout.GoHome") }
                  </Button>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      {t("Checkout.Back")}
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length -1 ? handlePurchase : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? t("Checkout.PlaceOrder") : t("Checkout.Next")}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}


export default withRouter(Checkout);