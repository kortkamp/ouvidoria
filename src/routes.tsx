import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import District from './pages/District';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/district/:id' component={ District }/>
    </Switch>
  );
};

export default Routes;