import React, { useContext, useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

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
        Payment method
      </Typography>
              <RadioGroup aria-label="gender" name="gender1" onChange={handlePaymentChange}>
                      <FormControlLabel value="CASH" control={<Radio />} label="Cash" />
                      <FormControlLabel value="DEBIT" control={<Radio />} label="Debit" />
                      <FormControlLabel value="CREDIT" control={<Radio />} label="Credit" />
                      <FormControlLabel value="TRANSFER" control={<Radio />} label="Transfer" />
                      <FormControlLabel value="MERCADOPAGO" control={<Radio />} label="Mercado Pago" />
                      
              </RadioGroup>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        Delivery Type
      </Typography>
              <RadioGroup aria-label="gender" name="gender1" onChange={handleDeliveryChange }>
                      <FormControlLabel value="PICKUP" control={<Radio />} label="Pick Up" />
                      <FormControlLabel value="DELIVERY" control={<Radio />} label="Delivery" />
                      
              </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(PaymentForm);