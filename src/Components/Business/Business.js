import React, { Component } from 'react';
import MainLinks from '../Main/MainLinks';
import '../../App.css';
import NavBar from '../NavBar';


class Business extends Component {

  state = {
    newsSource1: {
      type: 'everything',
      query: 'q=business'
    }
  }
  render() {
    return(
     <div>
       <NavBar />
        <MainLinks news={this.state.newsSource1} />
     </div>
    )
  }
}

export default Business;
