import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
// import BusinessList from '../Business/BusinessList'

class MainLinks extends Component {

  state = {
      articles: []
  }

  componentDidMount() {
    this.getNews();
    }

  getNews = () => {
       axios.get(`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=a391fff851774b5d8804cf3027c4b8e8&pageSize=10`)
       .then(res=> {
           this.setState({ articles: res.data.articles })
       })
    };

  render () {
     return(
        <>
        {
          this.state.articles.map((item) => {
            return(
              <article className="card cad container mb-4 col-md-6" key={item.url}>
              <header className="card-header">
                <div className="card-meta">
                  <time className="timeago">
                     <Moment format="YYYY/MM/DD HH:mm" withTitle>{item.publishedAt}</Moment>
                  </time>
                  <br />
                </div>
                <p>Author<strong> : {item.author}</strong></p>
                  <h4 className="card-title">{item.title}</h4>
              </header>
               <img className="card-img item" src={item.urlToImage} alt="news" />
             <div className="card-body">
                <p className="card-text">
                {
                  item.description.length < 100 ? `${item.description}` :
                  `${item.description.substring(0, 95)}....`
                }
                </p>
              </div>
              <a href={item.url}>
                  <p className="btn btn-secondary">Read More</p>
              </a>
            </article>
            )
          })
        }
        </>
     )
  }
}

export default MainLinks;
