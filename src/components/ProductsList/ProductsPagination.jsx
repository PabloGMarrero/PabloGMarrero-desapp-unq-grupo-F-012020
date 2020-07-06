import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    pages:{
      display: 'flex'
    },
    
}));

const ProductsPagination = ({productsPerPage, totalProducts, paginate}) =>{
    const classes = styles()
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage) ; i++){
        pageNumbers.push(i)
    }
    return(
        <Box>
            <List className={classes.pages}>
                {pageNumbers.map(number =>(
                    <ListItem key = {number} className="page-item"> 
                        <button onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </button>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default ProductsPagination