import React from 'react';
import Navigation from './Navigation';
import ItemsBody from './ItemsBody';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingleItem from './SingleItem';
import CreateTodo from './CreateTodo';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div> 
            <Navigation /> 
            <div className="container">
              <Switch>
              <Route path='/new' exact component ={CreateTodo} />
                <Route path='/:id' component ={SingleItem} />
                <Route path='/' exact component ={ItemsBody} />

              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
