import React, { Component } from 'react'
import Navbar from './../navbar'
import MyDate from '../date'
import $ from 'jquery'
//import Weather from '../weather'




class News extends Component {
  state = {
    articles: [],
    api: '',
    weather: '',
    town: '',
    temp: ''
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
    }).then(() => {

      console.log("LOCAL STORAGE from HOME >>>>>>", localStorage);
      const api = '58443d73bb4adf5b12a65dda8efd13fb'
      const rio = '2fb0ef496cacff708e1da0ad370562d6'


      $.ajax({
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${process.env.APPID}`,
        dataType: 'jsonp',
        success: (result) => {
          console.log('WEATHER RESULT: ', result);
          console.log('&', result.weather[0].temp);
         this.setState({town: result.name, weather: result.weather[0].description, temp: Math.ceil(result.main.temp)})
        //  console.log("STATE",this.state);
        // localStorage.setItem("town", result.name)
        // localStorage.setItem("weather", result.weather[0].description)
        // localStorage.setItem("temp", Math.ceil(result.main.temp))

        },
        error: function(err) {
          console.log('WEATHER ERR: ', err);
        }
      })

    })
   }

// ES6 will provide a lexical scope for the variable which otherwise would need this.bind
   renderArticles = () => {
     console.log("NEWS", this.state.articles);
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

          <Navbar />
          <div className="container">
          <MyDate />
          <div className="splash">
          <h1 className="splash">News Articles</h1>

          <div className="outline">
          <h3> We have clear skies in Boulder, Colorado today. </h3><h3>The temperature is 25&#176; C </h3>
          </div>


          </div>
          <button className="btn btn-default">Sports</button>
          <button className="btn btn-default">CNN</button>


<div className="flex-container">
{this.renderArticles()}
</div>
</div>
</div>
      )
  }
}

export default News
