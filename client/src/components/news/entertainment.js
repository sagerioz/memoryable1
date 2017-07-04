import React, { Component } from 'react'
import $ from 'jquery'

class Entertainment extends Component {
  state = {
    articles: []
  };

  componentDidMount() {

    const apiKey = '1e113c3733bb4dd69cccb5156d4d4081'
    const apiSource = 'entertainment-weekly'
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
     console.log("NEWS entertainment", this.state.articles);
     return this.state.articles.map(function(article) {
       if(article.urlToImage){
       return (
         <div className="list-group-item news-article">
         <a href={article.url} className="news">
           <img src={article.urlToImage} width="50%" id="news"/>
         <article className="article">
           <h2>{article.title}</h2>
           <h4 className="news-article">POSTED ON {article.publishedAt}</h4>
           <p className="news-article">{article.description}</p>
           <a href={article.url} className="news-article">MORE...</a>
         </article>
         </a>
         </div>
       );
     }
    });
  };

  render() {
      return (

              <div>
                {this.renderArticles()}
              </div>

      )
  }
}

export default Entertainment
