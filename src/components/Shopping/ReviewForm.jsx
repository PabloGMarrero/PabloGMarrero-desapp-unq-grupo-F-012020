import React, { useContext, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { PurchaseContext } from '../../context/purchase-context'
import { UserContext } from '../../context/user-context'
import { useTranslation } from 'react-i18next'


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));



const Review = () =>{ 

  const {
    shoppingList,
    total,
    deliveryType,      
    payMethod, 
    street,
    number,
    state,
    city,
    zipCode,
    country
  
  } = useContext(PurchaseContext);

  const [user] = useContext(UserContext)
  const { t } = useTranslation();
  const classes = useStyles();

  const addresses = [street, number, city, state, zipCode, country];

  const payments = [
    { name: t("Checkout.DeliveryType"), detail: deliveryType },
    { name: t("Checkout.PaymentMethod"), detail: payMethod },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      {t("Checkout.OrderSummary")}
      </Typography>
      <List disablePadding>
        {shoppingList.map((product) => (
          <ListItem className={classes.listItem} key={product.productName}>
            <ListItemText primary={product.productName} secondary={product.brand} />
            <Typography variant="body2"> {new Intl.NumberFormat(t("Format.lang"), {
                style: "currency",
                currency: t("Format.currency"),
              }).format(t("Format.currency") == 'ARS'  ? product.price : product.price /107)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          {new Intl.NumberFormat(t("Format.lang"), {
                style: "currency",
                currency: t("Format.currency"),
              }).format(t("Format.currency") == 'ARS'  ? total : total / 107)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
          {t("Checkout.Shipping")}
          </Typography>
        <Typography gutterBottom>{user.name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
          {t("Checkout.PaymentDetails")}
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withRouter(Review);