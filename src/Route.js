import React from 'react';
import { Route } from 'react-router-dom';
import App from './Components/App';
import Business from './Components/Business/Business';



const BaseRouter = () => {
  return(
    <div>
       <Route exact path = '/' component={App} />
       <Route exact path = '/business' component={Business} />
    </div>
  )
}

export default BaseRouter;
