import React from 'react';


class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      
        <div id={this.props.id} className="card store-card">
        <div className="card-body">
          <div className="row">
            <div className="col-10">
              <p className="card-title"> {this.props.storeName}</p>  
              <div className="col-10">
              <h>({this.props.activity})</h>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Store;

/*import React from 'react';
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
  
  export default Store;*/