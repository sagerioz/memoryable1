import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'



class News extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const apiKey = '1e113c3733bb4dd69cccb5156d4d4081'
    let userData = ''
    $.ajax({
      method:'get',
      url: `https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=${apiKey}`,
      dataType: 'json',
      success: (result) => {
        this.setState({ articles: result.articles });
      },
      error: function(err) {
        console.log(err);
      }
    })
   }

// ES6 will provide a lexical scope for the variable which otherwise would need this.bind
   renderArticles = () => {
     console.log("NEWS", this.state.articles);
     return this.state.articles.map(function(article) {
       return (
         <article>
           <h2>{article.title}</h2>
           <img src={article.urlToImage} width="50%" />
           <p>{article.description}</p>
         </article>
       );
    });
  };

  render() {
      return (
          <div>
          <Navbar />
          <h1>News Articles</h1>
          {this.renderArticles()}

          </div>
      )
  }
}

export default News
