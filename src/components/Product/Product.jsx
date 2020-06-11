import React from 'react';
import Button from '@material-ui/core/Button';
import './Product.css';

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
      <div>
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>{this.props.productName}</h4>  
             <h4> Precio: ${this.props.price}</h4> 
            
             <img src={this.props.imageUrl} alt={this.props.productName}  className="product-img" />
          </div>
        
          <div className="row btn-toolbar">
           <div className="col-6 text-right">
            <div className="col-sm-2 text-right">Quantity: {this.state.qty}</div>
             <Button  variant="contained" size="small" color="primary" align= "center" onClick={this.add}>
               Add Item
             </Button>
             <Button  variant="contained" size="small" color="primary" align= "center" onClick={this.subtract} disabled={this.state.qty < 1}>
               Remove item
             </Button>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default Product;