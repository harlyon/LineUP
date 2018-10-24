import React, { Component } from 'react';
import MainLinks from '../Main/MainLinks'
import NavBar from '../NavBar'

class Fashion extends Component {
    state = {
        newsSource1: {
          type: 'everything',
          query: 'q=fashion'
        }
      }
      render() {
        return(
         <div>
           <NavBar />
           <div className="main">
              <div className="container">
                 <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <MainLinks news={this.state.newsSource1} />
                    </div>
                  </div>
              </div>
            </div>
          </div>


        )
      }
    }

export default Fashion;