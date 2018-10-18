import React, { Component } from 'react';
import axios from 'axios';

class Sports extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews = () => {
       axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=a391fff851774b5d8804cf3027c4b8e8&pageSize=3`)
       .then(res=> {
           this.setState({ articles: res.data.articles })
           console.log(res.data.articles)
       })
    }

    render() {
        return (
            <div>
                {
                    this.state.articles.map((article) => {
                        return (
                            <article className="card pos mb-4">
                            <header className="card-header">
                              <div className="card-meta">

                                <time className="timeago">{article.publishedAt}</time><br />
                              </div>
                              <p>Author<strong> : {article.author}</strong></p>
                                <h4 className="card-title">{article.title}</h4>
                            </header>
                             <img className="card-img item" src={article.urlToImage} alt="news" />
                           <div className="card-body">
                              <p className="card-text">{article.description}</p>
                            </div>
                            <a href="post-image.html">
                                <p className="btn btn-secondary">Read More</p>
                            </a>
                          </article>
                        )
                    })
                }
            </div>
        );
    }
}

export default Sports;