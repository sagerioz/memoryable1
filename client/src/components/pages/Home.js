import React, { Component } from 'react'
import Navbar from './../navbar'
//import { Link } from 'react-router-dom'
//import $ from 'jquery'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: ''
    }


  }

  componentDidMount(){
    
    fetch('/api/scrapbook', {
           method: 'GET'
         }).then(res => {
         return res.text().then(pics => {
           pics = JSON.parse(pics)
           this.setState({
             photos: pics,
             title: pics
           })
            console.log("PICS", pics);
          })
     })
  }


  render() {
    let recent = this.state.photos
    let picsList = recent.map(function(picsDisplay) {
      return <img src={picsDisplay.item_image} width="25%" alt="scrapbook_photo"/>
    })
    let picsTitle = recent.map(function(picsTitleDisplay) {
      return <p>{picsTitleDisplay.title}</p>
    })
      return (
          <div>
            <Navbar />
              <div className="container">

                  <div>{picsList}{picsTitle}</div>

              </div>
          </div>
      )
  }
}

export default Home
