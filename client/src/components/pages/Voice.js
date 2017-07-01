import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm'
import MyDate from '../date'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    // if (!localStorage.profile || !localStorage.jwtToken ) {
    //   window.location.href = '/'
    // }
  }

  getScrapbook(userid) {
    return fetch('/api/scrapbook', {
           method: 'GET'
         })
         .then(res => {
         return res.text().then(pics => {
           pics = JSON.parse(pics)

           let picItems = pics.filter(entry => {
             return entry.user_id == userid
           });

           this.setState({
             photos: picItems
          });
            console.log("PICS", pics);
          })
     })
  }

  componentDidMount(){


}

  render() {


      return (

<iframe frameborder="0" style="width: 420px; height: 130px;" src="https://www.speakpipe.com/voice-recorder/embed/msg/8dj02krif7u50ub0"></iframe>
      )
  }
}

export default Home
