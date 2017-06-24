import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookFormEdit from '../scrapbook/ScrapbookFormEdit'

class Edit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pic: {},
      id: '',
      item_image: '',
      title: '',
      description: ''
    }
    if (localStorage.jwtToken) {
      window.location.href = '/'
    }
  }

  componentDidMount() {
    let pic_id = window.location.pathname.split('/')[3]
    //  console.log("USERDATA in edit form onLoad", userData);
  //  console.log("state", this.state);
    console.log("PIC ID", pic_id);
    let userData = ''
    fetch(`/api/scrapbook/${pic_id}`, {
           method: 'GET'
         }).then(res => {
         return res.text().then(pic => {
           pic = JSON.parse(pic)
           this.setState({
             id: pic[0].id,
             item_image: pic[0].item_image,
            title: pic[0].title,
            description: pic[0].description
           })
            console.log("pic on EDIT yo", this.state.item_image);
          })
     })
   }



  render() {
      return (
          <div>
          <Navbar />

          <h1>Your Photo</h1>
          <div className="edit-image"><img src={this.state.item_image}/>
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
          </div>

===============


<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
edit
</button>


<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Edit Scrapbook Item</h4>
      </div>
      <div className="modal-body">
        <ScrapbookFormEdit />
      </div>

    </div>
  </div>
</div>


======================














          </div>
      )
  }
}

export default Edit
