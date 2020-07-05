import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Item from './Item';
import { PurchaseContext } from '../../context/purchase-context'
import './Bag.css';
export default function Bag() {
  const {
    shoppingList,
    productsCount,
    setProductsCount,
    setShoppingList,
    setCartIsOpen,
    cartIsOpen
  } = useContext(PurchaseContext);

  console.log(shoppingList)

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let computed_total = 0;
    shoppingList.map(
      item =>
        (computed_total += parseInt(item.price.length - 1) * item.quantity
        )
    );
    setTotal(computed_total);
    localStorage.setItem('prod_count', JSON.stringify(productsCount));
    localStorage.setItem('shopping_list', JSON.stringify(shoppingList));
  }, [shoppingList, productsCount]);

  const handleClick = () => {
    setCartIsOpen(open => !open);
  };

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
            <span style={{ fontWeight: 'bold' }}>CART</span>
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
              <div className="bag__empty">Empty Cart</div>
            )}
          </div>
          <div className="bag__footer">
            <div className="bag__total">Total: {total}$</div>
            <div className="checkout__btn" onClick={() => alert('COOL ! ')}>
              CHECKOUT
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
