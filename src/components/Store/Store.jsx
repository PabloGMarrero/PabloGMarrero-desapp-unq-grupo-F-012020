import React from 'react';
import Box from '@material-ui/core/Box'


class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      
      <Box>
      <Box className="row form-group">
        <Box className="col-sm-10">
      
          <h4>{this.props.storeName}</h4>  
          <h4> {this.props.activity}</h4> 
          
          
        </Box>
      
      </Box>
      </Box>

    );
  }
}

export default Store;

