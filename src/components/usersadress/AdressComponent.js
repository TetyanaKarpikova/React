import React, { Component } from 'react';
import './Adress.css';

class AdressComponent extends Component {
  render() {
    let {item, cls} = this.props;
    return (

      <div className={cls}>        
          {item.name} - {item.age} - {item.status.toString()} - {item.address.city} - {item.address.street} - {item.address.number}
      </div>
    )
  }
}


export default AdressComponent;