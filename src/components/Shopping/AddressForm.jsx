import React, { useContext, useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { PurchaseContext } from '../../context/purchase-context'


const AddressForm = () =>{ 

  const {
    address,
    setAddress,

  } = useContext(PurchaseContext);

  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("")

  const addressForm = [
    { 
      'street': street, 
      'number': number,
       'state': state, 
       'city': city,
       'zipCode': zipCode,
      'country': country,
  
  },  ];

  //useEffect(() => {
  //  let new_state = addressForm
  //  setAddress(new_state)
  //}, [address]);

  console.log(address)

  console.log(addressForm)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Street"
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
            label="Number"
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
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(ev) => setCity(ev.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth 
          onChange={(ev) => setState(ev.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
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
            label="Country"
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