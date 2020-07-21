import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import { Container, Button } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar';
import CSVReader from 'react-csv-reader';
import productService from '../../service/product-service';
import { UserContext} from '../../context/user-context'

const styles = makeStyles((theme) => ({
    multipleProducts:{
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    csv:{
        marginTop: '30px',
    },
    button:{
        background: '#E59500',
        marginTop: '30px',
    },
}));

const AddMultipleProducts = () =>{
    const classes = styles();
    const {t} = useTranslation()
    const [products, setProducts] = useState([]);
    const [uploadSuccessful, setUploadSuccessful] = useState(false);
    const [sendingSuccessful, setSendingSuccessful] = useState(false);
    const { user } = useContext(UserContext)
    const history = useHistory();

    const handleClickAddMultipleProductToStore = (ev) =>{
        productService.addMultiplesProductToStore(user.idStore, products)
        .then(resp => {
            console.log(resp)
            setSendingSuccessful(true)
        })
        .catch(e => {
            console.log(e)
            setSendingSuccessful(false)
        })
    }

    const handleParseFile = (data) => {
        const csvProducts = data.map(product => generateProducts(product));
        csvProducts.pop();
        setProducts(csvProducts)
        setUploadSuccessful(true)
        if (csvProducts.length ===1 && csvProducts[0].name ===""){
            setUploadSuccessful(false)

        }
        console.log(csvProducts)
    }

    const generateProducts = (product) => {
        const productToAdd= {
            name: product[0],
            brand: product[1],
            imageUrl: product[2],
            price:product[3],
            store: "",
            id: 0
        }
        return productToAdd;
    }

    const handleError = () =>{
        alert("Error..")
    }

    const handleClose = (event, reason) =>{
        if (reason === 'clickaway') {
          return;
        }
    
        setSendingSuccessful(false);
        history.push("/")
    }

    return(
        <Container className = {classes.multipleProducts}>
            <Box className = {classes.csv}>
                <CSVReader
                    label={t("AddMultipleProducts.SelectFile")}
                    onFileLoad={handleParseFile}
                    addRemoveButton
                    inputId="csv"
                    inputStyle={{color: 'red'}}
                    onFileLoaded={handleParseFile}
                    onError={handleError} 
                />

            </Box>
            <Box>
                {uploadSuccessful ?
                    <Button 
                        type="submit"
                        fullWidth
                        className={classes.button} 
                        onClick={ (ev) => handleClickAddMultipleProductToStore(ev)}
                        >{t("AddMultipleProducts.SendFile")}
                    </Button>
                    : <p>{t("AddMultipleProducts.InvalidCharacteres")}</p>
                }    
            </Box>

            <Snackbar open={sendingSuccessful} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {t("AddMultipleProducts.Success")}
              </Alert>
            </Snackbar>
        </Container>
    )
}

export default AddMultipleProducts;

