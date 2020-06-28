import React, { useContext, useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
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
      setCountry

  } = useContext(PurchaseContext);


  const { t } = useTranslation();
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
            onChange={(ev) => setStreet(ev.target.value)}
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
            onChange={(ev) => setNumber(ev.target.value)}
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
            onChange={(ev) => setCity(ev.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label={t("Checkout.State")} fullWidth 
          onChange={(ev) => setState(ev.target.value)}
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
            onChange={(ev) => setZipCode(ev.target.value)}
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
            onChange={(ev) => setCountry(ev.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(AddressForm);