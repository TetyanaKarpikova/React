import React, { Component } from 'react';
import AdressComponent from './components/usersadress/AdressComponent';
import { usersAddress } from './database/usersAdress';

class App extends Component {
  render() {

    return (

      <div>
        {
        usersAddress.map((adress, index) => {
          let clsx = index % 2 ? 'even' : 'odd';
          return (
            <AdressComponent
              item = {adress}
              cls = {clsx}
              key = {adress.id}/>
          )
        })
        }
      </div>
    )
  }
}

export default App;
