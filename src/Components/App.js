import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main/Main';

class App extends Component {

  state = {
    source1: {
      type: 'everything',
      query: 'q=business'
    },
    source2: {
      type: 'top-headlines',
      query: 'country=us'
    },
    source3: {
      type: 'everything',
      query: 'q=sport'
    }
  }



  render() {
    return (
      <>
        <NavBar />
        <br />
        <div className="main">
           <div className="container">
              <div className="row">
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center"
                     style={{color: 'white', background: 'black'}}>
                     Top Headlines
                  </h3>
                 <br />
                  <Main articles={this.state.source2} />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center"
                     style={{color: 'white', background: 'red'}}>
                     Business
                  </h3>
                 <br />
                  <Main articles={this.state.source1} />
                 </div>
                 <div className="col-md-4 col-sm-12">
                 <h3 className="text-center"
                     style={{color: 'white', background: 'black'}}>
                     Sport News
                   </h3>
                 <br />
                   <Main articles={this.state.source3} />
                 </div>
              </div>
           </div>
        </div>
      </>
    );
  }
}

export default App;
