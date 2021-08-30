import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import District from './pages/District';
import Complaint from './pages/Complaint'
import User from './pages/User'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/district/:id' component={ District }/>
      <Route path='/complaint' component={ Complaint } />
      <Route path='/user/:id' component={ User } />
    </Switch>
  );
};

export default Routes;