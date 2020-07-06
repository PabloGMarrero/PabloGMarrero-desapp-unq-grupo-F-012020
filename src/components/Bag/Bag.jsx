import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Item from './Item';
import { PurchaseContext } from '../../context/purchase-context'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next'
import './Bag.css';


const styles = makeStyles((theme) => ({
  register:{
    background: '#E59500'
  },
}));

export default function Bag() {
  const {
    shoppingList,
    productsCount,
    setProductsCount,
    setShoppingList,
    setCartIsOpen,
    cartIsOpen,
    total,
    setTotal
  } = useContext(PurchaseContext);

  const classes = styles();
  const history = useHistory(); 
  const { t } = useTranslation();

  useEffect(() => {
    let computed_total = 0;
    shoppingList.map(
      item =>(
        computed_total +=  item.price * item.quantity
      )
    );
    setTotal(computed_total);
    localStorage.setItem('prod_count', JSON.stringify(productsCount));
    localStorage.setItem('shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList, productsCount, setTotal]);

  const handleClick = () => {
    setCartIsOpen(open => !open);
  };

  const goToPurchase = () =>{
    history.push("/purchase")
  }

  return (
    <div className="wrapper">
      <div className="bag" onClick={handleClick}>
        <div className="items__count">{productsCount}</div>
      </div>
      <CSSTransition
        in={cartIsOpen}
        classNames="slide"
        timeout={300}
        unmountOnExit
      >
        <div className="container">
          <div className="close__btn" onClick={handleClick}>
            <div>X</div>
          </div>
          <div className="side__bar">
            <div className="bag__info">
              <div className="bag__img">
                <div className="items__count">{productsCount}</div>
              </div>
            </div>
            <span style={{ fontWeight: 'bold' }}>{t("Bag.Cart")}</span>
          </div>
          <div className="items__container">
            {shoppingList.length > 0 ? (
              shoppingList.map((item, index) => {
                return (
                  <Item
                    key={index}
                    item={item}
                    setProductsCount={setProductsCount}
                    productsCount={productsCount}
                    shoppingList={shoppingList}
                    setShoppingList={setShoppingList}
                  />
                );
              })
            ) : (
              <div className="bag__empty">{t("Bag.EmptyCart")}</div>
            )}
          </div>
          <div className="bag__footer">
            <div className="bag__total">Total:  
            
            {new Intl.NumberFormat('es-AR', {
                style: "currency",
                currency: "ARS",
              }).format(total)}
            
            </div>
            <Button 
                type="submit"
                fullWidth
                className={classes.register} 
               onClick={goToPurchase}
                >Checkout
      </Button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
