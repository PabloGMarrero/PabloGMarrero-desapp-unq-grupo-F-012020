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

const base_path = './assets/img/'



const Product = ({ data }) => {
  const { id, productName, price, image_url:image } = data;

  return (
    
    <div id={id} className="card product-card">
      <div className="card-body">
        <div className="row">
          <div className="product-col" style={{ textAlign: 'center' }}>
            <img src={base_path + 'coca-cola-225.jpg'} alt={productName} className="product-img" />
          </div>
          <div className="col-10">
            <h5 className="card-title">{productName}</h5>
            <p className="card-text">{price}</p>
            <Button size="small" color="primary" align= "center">
                      Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
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