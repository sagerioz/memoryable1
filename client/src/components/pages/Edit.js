import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookFormEdit from '../scrapbook/ScrapbookFormEdit'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pic: [],
      id: ''
    }
  }

  componentDidMount() {
    let userData = ''
    fetch(`/api/scrapbook/:id`, {
           method: 'GET'
         }).then(res => {
         return res.text().then(pic => {
           pic = JSON.parse(pic)
           this.setState({
             //id: pics,
             pic: pic
            // title: pics,
            // description: pics
           })
            console.log("pic", pic);
          })
     })
   }



  render() {
      return (
          <div>
          <Navbar />
          <h1>Your Photo</h1>
        ready to edit
        <ScrapbookFormEdit />
          </div>
      )
  }
}

export default Edit
