import React from 'react';

export default function Item({
  setProductsCount,
  setShoppingList,
  shoppingList,
  item
}) {
  const { id, productName,  price, quantity } = item;

  const removeItem = () => {
    setProductsCount(productCount => productCount - 1);
    let product_array = shoppingList.filter(p => p.id === id);
    if (product_array[0].quantity === 1) {
      setShoppingList(shoppingList.filter(p => p.id !== id));
    } else {
      let new_state = shoppingList.map(p => {
        if (p.id === id) {
          p.quantity -= 1;
          return { ...p };
        } else return { ...p };
      });
      setShoppingList(new_state);
    }
  };

  const addItem = () => {
    setProductsCount(productCount => productCount + 1);
    let new_state = shoppingList.map(p => {
      if (p.id === id) {
        p.quantity += 1;
        return { ...p };
      } else return { ...p };
    });
    setShoppingList(new_state);
  };
  const deleteAllItems = () => {
    let totalQuantity = 0;
    const filtered_shoppingList = shoppingList.filter(p => {
      if (p.id !== id) {
        totalQuantity += p.quantity;
        return p;
      } else return null;
    });
    setProductsCount(totalQuantity);
    setShoppingList(filtered_shoppingList);
  };
  return (
    <div className="bag__item__container">
      <div className="item__close__btn__wrapper">
        <div className="item__close__btn" onClick={deleteAllItems}>
          X
        </div>
      </div>
      <div className="bag__item">
        <div>
          <span >{productName}</span>
        </div>
        <div>
          <span className="bag__price">{price}</span>
        </div>
      </div>
      <div className="bag__operation">
        <span>Quantity: {quantity}</span>
        <div>
          <div className="small__btn" onClick={removeItem}>
            -
          </div>
          <div className="small__btn" onClick={addItem}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}
