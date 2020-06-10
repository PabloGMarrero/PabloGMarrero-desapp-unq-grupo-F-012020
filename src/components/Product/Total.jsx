import React, { useState } from 'react'

const mystyle = {
  borderTop: "1px solid #ddd",
  marginTop: "10px"
};

const Total = (totalProp)=> {
  let [total, setTotal] = useState(totalProp)
  let totalIncTax = (+total);

  return (
    <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
      <h3 className="row" style={mystyle}>
        <span className="col-6">Total:</span>
        <span className="col-6 text-right">${totalIncTax}</span>
      </h3>
   </div>
  );
}

export default Total;