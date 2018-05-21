import React from 'react';
import Navigation from './Navigation';
import ItemsBody from './ItemsBody';


class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
            <ItemsBody />
        </div>
      </div>
    );
  }
}

export default App;
