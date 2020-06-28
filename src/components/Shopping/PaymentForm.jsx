import React, { useContext, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { PurchaseContext } from '../../context/purchase-context'






const PaymentForm = () =>{ 

  const {
    shoppingList,

    deliveryType,      
    payMethod, 
    setDeliveryType,
    setPayMethod
  
  } = useContext(PurchaseContext);

  const handleDeliveryChange = (event) => {
    setDeliveryType(event.target.value);
  };
  const { t } = useTranslation();
  const handlePaymentChange = (event) => {
    setPayMethod(event.target.value);
  };
  console.log(deliveryType)
  console.log(payMethod)

  return (
    <React.Fragment>
     
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        {t("Checkout.PaymentMethod")}
      </Typography>
              <RadioGroup aria-label="gender" name="gender1" onChange={handlePaymentChange}>
                      <FormControlLabel value="CASH" control={<Radio />} label={t("Checkout.Cash")}/>
                      <FormControlLabel value="DEBIT" control={<Radio />} label={t("Checkout.Debit")} />
                      <FormControlLabel value="CREDIT" control={<Radio />} label={t("Checkout.Credit")} />
                      <FormControlLabel value="TRANSFER" control={<Radio />} label={t("Checkout.Transfer")} />
                      <FormControlLabel value="MERCADOPAGO" control={<Radio />} label="Mercado Pago" />
                      
              </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        {t("Checkout.DeliveryType")}
      </Typography>
              <RadioGroup aria-label="gender" name="gender1" onChange={handleDeliveryChange }>
                      <FormControlLabel value="PICKUP" control={<Radio />} label={t("Checkout.PickUp")} />
                      <FormControlLabel value="DELIVERY" control={<Radio />} label={t("Checkout.Delivery")} />
                      
              </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(PaymentForm);