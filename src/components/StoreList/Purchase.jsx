import React from 'react';
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'



class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  

  render() {
    console.log(this.props)

    return (
    
    <Card className="{classes.root}">
        <CardContent>
          <Typography className="{classes.title}" color="textSecondary" gutterBottom>
            Purchase Date : {this.props.purchaseDate}
          </Typography>
          <Typography className="{classes.pos}" color="textSecondary">
           Payment Method: {this.props.paymentMethod}
          </Typography>
          <Typography variant="h5" component="h2">
            Total: {this.props.total}
          </Typography>
          <CardActions>
                <Button variant="contained" size="small" align= "center" >Buy again</Button>
            </CardActions>
        </CardContent>
      </Card>


      
     /* <Box>
      <Box className="row form-group">
        <Box className="col-sm-10">
      
        <h4>{this.props.purchaseDate}</h4>  
          <h4> {this.props.paymentMethod}</h4> 
          <h4> {this.props.total}</h4> 
          <h4> {this.props.itemQuantity}</h4> 
          
        </Box>
      
      </Box>
      </Box>*/

    );
  }
}

export default Purchase;
