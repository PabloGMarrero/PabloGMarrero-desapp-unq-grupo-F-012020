import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root:{
    width: "100%",
    margin: "30px"
  },
  title:{
    fontFamily: 'Roboto',
  }
}));

const Store = ({storeName, activity}) =>{
  const classes = styles()

  return (
    <Box>
      <Card className={classes.root}>
        <CardContent>      
          <Typography variant="h5" component="h2">
                {storeName}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
              {activity}
          </Typography>
        </CardContent>
      </Card>
    </Box>
    );
}

export default Store;

