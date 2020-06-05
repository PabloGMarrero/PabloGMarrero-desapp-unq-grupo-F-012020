import React from 'react';
import './Store.css';


const Store = ({ data }) => {
    const { id, storeName, activity } = data;
  
    return (
      <div id={id} className="card store-card">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <h5 className="card-title"> {storeName} ,({activity})</h5>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Store;