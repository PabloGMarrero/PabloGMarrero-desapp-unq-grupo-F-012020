import React, { useState } from 'react'
import {useTranslation} from 'react-i18next'

const mystyle = {
  borderTop: "1px solid #ddd",
  marginTop: "10px"
};

const Total = ({totalProp})=> {
  let [total, setTotal] = useState(0)
  let totalIncTax = (total);
  const {t} = useTranslation()

  return (
    <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
      <h3 className="row" style={mystyle}>
        <span className="col-6">{t("Total.Total")}</span>
        <span className="col-6 text-right">${totalIncTax}</span>
      </h3>
   </div>
  );
}

export default Total;