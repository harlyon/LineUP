import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Business from './Components/Business'
import Sports from './Components/Sports'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="main">
           <div className="container">
              <div className="row">
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center" style={{color: 'red'}}>Top Headlines</h3>
                 <br />
                  <Main />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center">Business</h3>
                 <br />
                  <Business />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center" style={{color: 'red'}}>Sport News</h3>
                 <br />
                  <Sports />
                 </div>
              </div>
           </div>
        </div>
        <br />
        <div className="main">
           <div className="container">
              <div className="row">
                 <div className="col-md-4">
                 <h3 className="text-center">Fashion News</h3>
                 <br />
                 <Business />
                 </div>
                 <div className="col-md-4">
                 <h3 className="text-center">Music News</h3>
                 <br />
                 <Business />
                 </div>
                 <div className="col-md-4">
                 <h3 className="text-center">Sport News</h3>
                 <br />
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
