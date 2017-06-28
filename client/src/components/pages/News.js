import React, { Component } from 'react'
import Navbar from './../navbar'
import MyDate from '../date'
import $ from 'jquery'



class News extends Component {
  state = {
    articles: [],
  };


  componentDidMount() {
    const apiKey = '1e113c3733bb4dd69cccb5156d4d4081'
    const apiSource = 'cnn'
    let userData = ''
    $.ajax({
      method:'get',
      url: `https://newsapi.org/v1/articles?source=${apiSource}&sortBy=top&apiKey=${apiKey}`,
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
       if(article.urlToImage){
       return (
         <div className="list-group-item">
           <img src={article.urlToImage} width="50%" id="news"/>
         <article className="article">
           <h3><a href={article.url}>{article.title}</a></h3>
           <h4>POSTED ON {article.publishedAt}</h4>
           <p>{article.description}</p>
           <a href={article.url}>MORE...</a>
         </article>
         </div>
       );
     }
    });
  };

  render() {
      return (
          <div>

          <Navbar />
          <MyDate />
          <div className="splash">
          <h1 className="splash">News Articles</h1>
          </div>
<div className="flex-container">
{this.renderArticles()}
</div>

</div>
      )
  }
}

export default News
