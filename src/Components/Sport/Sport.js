import React, { Component } from 'react';
import MainLinks from '../Main/MainLinks';
import NavBar from '../NavBar';
import Aside from '../Aside/Aside';

class Sport extends Component {

    state = {
        newsSource1: {
          type: 'everything',
          query: 'q=sport'
        }
      }

    render() {
        return (
            <div>
                <NavBar />
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 col-sm-12">
                                <MainLinks news={this.state.newsSource1} />
                            </div>
                            <div className="col-sm-3">
                               <Aside />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sport;