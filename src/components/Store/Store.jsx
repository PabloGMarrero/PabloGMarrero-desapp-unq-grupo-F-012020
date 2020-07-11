import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (

      <Card className="{classes.root}">
      <CardContent>
       
        <Typography variant="h5" component="h2">
              {this.props.storeName}
        </Typography>
        <Typography className="{classes.title}" color="textSecondary" gutterBottom>
            {this.props.activity}
        </Typography>
      </CardContent>
    </Card>

      
      /*<Box>
      <Box className="row form-group">
        <Box className="col-sm-10">
      
          <h4>{this.props.storeName}</h4>  
          <h4> {this.props.activity}</h4> 
          
          
        </Box>
      
      </Box>
      </Box>*/

    );
  }
}

export default Store;

