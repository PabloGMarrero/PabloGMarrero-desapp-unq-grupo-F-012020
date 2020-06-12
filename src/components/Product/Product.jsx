import React from 'react';
import Button from '@material-ui/core/Button';
import './Product.css';
import Box from '@material-ui/core/Box'
import { useTranslation } from 'react-i18next'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);

  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    alert(this.state.qty)
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  render() {
    return (
      <Box>
        <Box className="row form-group">
          <Box className="col-sm-10">
            <Box className="product-col" style={{ textAlign: 'center' }}>   
              <img src={this.props.imageUrl} alt={this.props.productName}  className="product-img" />
            </Box>

            <h4>{this.props.productName}</h4>  
            <h4> ${this.props.price}</h4> 
            
            
          </Box>
          <Box className="col-sm-2 text-right">{this.props.t("Product.Quantity")}: {this.state.qty}</Box>
        </Box>
        <Box className="row btn-toolbar">
          <Box className="col-6 text-right">
            <Button  variant="contained" size="small" color='#840032'  align= "center" onClick={this.add}>
              {this.props.t("Product.Add")}
            </Button>
            <Button  variant="contained" size="small" color='#840032' align= "center" onClick={this.subtract} disabled={this.state.qty < 1}>
              {this.props.t("Product.Remove")}
            </Button>
          </Box>
        </Box>

      </Box>
    );
  }
}

export default Product;