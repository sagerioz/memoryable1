import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
import $ from 'jquery'



class News extends Component {
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
      url: `https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=${apiKey}`,
      dataType: 'json',
      success: function(result) {
        //console.log(result);
        // userData = {
        //   cityName: result.name,
        //   weatherDesc: result.weather[0].description,
        //   temp: result.main.temp
        //
        // }
        console.log("NEWS", result);

      //  console.log("state IS ", this.state);
       //return userData

      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      // this.setState({town: userData.cityName, weather: userData.weatherDesc, temp: Math.ceil(userData.temp)})
      // console.log("TOWN!!", this.state.town);
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


    // let recent = this.state.photos
    // let town = this.state.town
    // let weather = this.state.weather
    // let temp = this.state.temp
    // let picsList = recent.map(function(picsDisplay) {
      // return <div><img src={picsDisplay.item_image} width="25%" alt="scrapbook_photo"/>
      // <p>{picsDisplay.title}</p>
    //  <p>NEWS</p></div>
  //  })
    // let picsTitle = recent.map(function(picsTitleDisplay) {
    //   return <p>{picsTitleDisplay.title}</p>
    // })
      return (
          <div>
          <Navbar />
            NEWS
          </div>
      )
  }
}

export default News
