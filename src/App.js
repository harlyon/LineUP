import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Business from './Components/Business';
import Sports from './Components/Sports';
import Fashion from './Components/Fashion';
import Music from './Components/Music';
import Tech from './Components/Tech';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="main">
           <div className="">
              <div className="row">
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center" style={{color: 'white', background: 'black'}}>Top Headlines</h3>
                 <br />
                  <Main />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center" style={{color: 'white', background: 'red'}}>Business</h3>
                 <br />
                  <Business />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center" style={{color: 'white', background: 'black'}}>Sport News</h3>
                 <br />
                  <Sports />
                 </div>
              </div>
           </div>
        </div>
        <br /><br />
        <div className="main">
           <div className="">
              <div className="row">
                 <div className="col-md-4">
                 <h3 className="text-center" style={{color: 'white', background: 'black'}}>Fashion News</h3>
                 <br />
                 <Fashion />
                 </div>
                 <div className="col-md-4">
                 <h3 className="text-center" style={{color: 'white', background: 'red'}}>Music News</h3>
                 <br />
                 <Music />
                 </div>
                 <div className="col-md-4">
                 <h3 className="text-center" style={{color: 'white', background: 'black'}}>Tech News</h3>
                 <br />
                 <Tech />
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
