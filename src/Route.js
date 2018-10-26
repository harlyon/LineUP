import React from 'react';
import { Route } from 'react-router-dom';
import App from './Components/App';
import Business from './Components/Business/Business';
import Fashion from './Components/Fashion/Fashion';
import TopHeadline from './Components/Top-Headlines/TopHeadline';
import Music from './Components/Music/Music';
import Technology from './Components/Technology/Technology';
import Sport from './Components/Sport/Sport';



const BaseRouter = () => {
  return(
    <>
       <Route exact path = '/' component={App} />
       <Route exact path = '/business' component={Business} />
       <Route exact path = '/fashion' component={Fashion} />
       <Route exact path = '/headlines' component={TopHeadline} />
       <Route exact path = '/music' component={Music} />
       <Route exact path = '/technology' component={Technology} />
       <Route exact path = '/sport' component={Sport} />
    </>
  )
}

export default BaseRouter;
