import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
}