import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'



class Todos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      town: ''
    }
  }

  componentDidMount(){
    const apiKey = '1e113c3733bb4dd69cccb5156d4d4081'
    let userData = ''
    $.ajax({
      method:'get',
      url: `https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=${apiKey}`,
      dataType: 'json',
      success: function(result) {
        console.log("HERE?",result);

        userData = {
          articles: result.articles
          // weatherDesc: result.weather[0].description,
          // temp: result.main.temp

        }
        console.log("NEWS", result.articles);

      //  console.log("state IS ", this.state);
       //return userData

      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      this.setState({
        article1: userData.articles[0].title,
        article2: userData.articles[1].title,
        article3: userData.articles[2].title,
        article4: userData.articles[3].title,
        article5: userData.articles[4].title

      })
      console.log("news article!!", this.state.articles);
    }).then(() => {
    // fetch('/api/scrapbook', {
    //        method: 'GET'
    //      }).then(res => {
    //      return res.text().then(pics => {
    //        pics = JSON.parse(pics)
    //        this.setState({
    //          photos: pics,
    //          title: pics
    //        })
    //         console.log("PICS", pics);
    //       })
    //  })
   })
   }


  render() {


     let headline1 = this.state.article1
     let headline2 = this.state.article2
     let headline3 = this.state.article3
     let headline4 = this.state.article4
     let headline5 = this.state.article5

    // let town = this.state.town
    // let weather = this.state.weather
    // let temp = this.state.temp
  //   let newsList = recent.map(function(newsDisplay) {
  //     return console.log("??", newsDisplay);
  //  })
  // for (var i = 0; i < recent.length; i++) {
  //   console.log("THE OBJS", recent[i]);
  // }


      return (
          <div>
          <Navbar />
        <div>
TODOS
        </div>
          </div>
      )
  }
}

export default Todos
