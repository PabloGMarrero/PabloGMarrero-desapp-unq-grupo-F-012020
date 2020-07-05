import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





const PaymentForm = () =>{ 

  const [delivery, setDelivery] = React.useState();
  const [payment, setPayment] = React.useState();

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  return (
    <React.Fragment>
     
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
              <RadioGroup aria-label="gender" name="gender1" value={payment} onChange={handleDeliveryChange}>
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
              <RadioGroup aria-label="gender" name="gender1" value={delivery} onChange={handlePaymentChange }>
                      <FormControlLabel value="PICKUP" control={<Radio />} label="Pick Up" />
                      <FormControlLabel value="DELIVERY" control={<Radio />} label="Delivery" />
                      
              </RadioGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(PaymentForm);