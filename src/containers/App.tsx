import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';

class App extends React.Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
