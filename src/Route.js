import React from 'react';
import { Route } from 'react-router-dom';
import App from './Components/App';
import Business from './Components/Business/Business';
import Fashion from './Components/Fashion/Fashion';



const BaseRouter = () => {
  return(
    <div>
       <Route exact path = '/' component={App} />
       <Route exact path = '/business' component={Business} />
       <Route exact path = '/fashion' component={Fashion} />
    </div>
  )
}

export default BaseRouter;
