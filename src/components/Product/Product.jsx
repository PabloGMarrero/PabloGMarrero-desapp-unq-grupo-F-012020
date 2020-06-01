/*import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
*/
import Button from '@material-ui/core/Button';

import React from 'react';
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
            
            <div className="product-col" style={{ textAlign: 'center' }}>
            
            <img src={this.props.imageUrl} alt={this.props.productName}  className="product-img" />
          </div>
          </div>
          <div className="col-sm-2 text-right">Quantity: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
          </div>
          <div className="col-6 text-right">
            <Button  variant="contained" size="small" color="primary" align= "center" onClick={this.add}>
              Add Item
            </Button>
            <Button  variant="contained" size="small" color="primary" align= "center" onClick={this.subtract} disabled={this.state.qty < 1}>
              Remove item
            </Button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Product;













/*
export class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            urlImg: this.props.product.urlImg,
            title : this.props.product.nameProduct
        }
    }
    render(){
        return(
            <Container fixed>
                <Grid item xs={12} sm={6}>
                    <Card className="card-product">
                        <CardActionArea>
                            <img src={this.state.urlImg} alt={this.state.nameProduct} ></img>
                            <CardContent className="content-product">
                                <Typography gutterBottom variant="h5" component="h2"> 
                                    {this.props.product.nameProduct}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2"> 
                                    {this.props.product.brand}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2"> 
                                    {this.props.product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Agregar a carrito
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Container>
        )
    }
}*/