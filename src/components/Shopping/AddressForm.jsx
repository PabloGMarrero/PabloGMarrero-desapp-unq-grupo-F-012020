import React, {useContext} from 'react'
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { PurchaseContext } from '../../context/purchase-context'
import { useTranslation } from 'react-i18next'



const AddressForm = () =>{ 

  const {
      setStreet,
      setNumber,
      setState,
      setCity,
      setZipCode,
      setCountry,
      setAnyError

  } = useContext(PurchaseContext);

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }



  const { t } = useTranslation();


  const handleStreetChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
    setStreet(event.target.value);
    }
  };

  const handleNumberChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
      setNumber(event.target.value);
    }
  };

  const handleCityChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
      setCity(event.target.value);
    }
  };

  const handleStateChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
      setState(event.target.value);
    }
  };

  const handleZipCodeChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
      setZipCode(event.target.value)
    }
  };

  const handleCountryChange = (event) => {
    if (isEmpty(event.target.value) ) { 
      setAnyError(true)
      
    } else {
      setCountry(event.target.value)
    }
  };
  

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {t("Checkout.Address")}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label={t("Checkout.Street")}
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleStreetChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           required
            id="address2"
            name="address2"
            label={t("Checkout.Number")}
            fullWidth
            autoComplete="shipping address-line2"
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label={t("Checkout.City")}
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label={t("Checkout.State")} fullWidth 
          onChange={handleStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label={t("Checkout.ZipCode")}
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleZipCodeChange }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label={t("Checkout.Country")}
            fullWidth
            autoComplete="shipping country"
            onChange={handleCountryChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(AddressForm);