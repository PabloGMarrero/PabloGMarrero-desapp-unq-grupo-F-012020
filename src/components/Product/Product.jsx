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
          <div className="product-col" style={{ textAlign: 'center' }}>
            
            <img src={this.props.imageUrl} alt={this.props.productName}  className="product-img" />
          </div>

            <h4>{this.props.productName}</h4>  
            <h4> ${this.props.price}</h4> 
            
            
          </div>
          <div className="col-sm-2 text-right">Cantidad: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
          </div>
          <div className="col-6 text-right">
            <Button  variant="contained" size="small" color='secondary'  align= "center" onClick={this.add}>
              Agregar
            </Button>
            <Button  variant="contained" size="small" color='default' align= "center" onClick={this.subtract} disabled={this.state.qty < 1}>
              Remover
            </Button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Product;