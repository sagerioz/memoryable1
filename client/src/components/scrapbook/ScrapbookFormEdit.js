import React, { Component } from 'react'
// import { createScrapbook } from '../../actions/scrapbookActions';
import TextFieldGroup from '../common/TextFieldGroup';
import TrashScrapbookItem from '../buttons/deleteBtn.js'




class ScrapbookFormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      pic_id: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {

    let userData = this.state
    let pic_id = window.location.pathname.split('/')[3]
     console.log("USERDATA in edit form onLoad", userData);
    console.log("state", this.state);

    e.preventDefault();
    fetch(`/api/scrapbook/${pic_id}`, {
      method: 'PATCH',
      body: JSON.stringify(userData),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
  window.location.href = '/scrapbook'
}
componentDidMount() {
    let recentPics = ''
    let pic_id = window.location.pathname.split('/')[3]
    this.setState({ pic_id: window.location.pathname.split('/')[3]});
    fetch(`/api/scrapbook/${pic_id}`, {
           method: 'GET'
         }).then(res => {
         return res.text().then(pic => {
           pic = JSON.parse(pic)
           let result = pic[0]
           this.setState({
             id: result.id,
             pic: result,
            title: result.title,
            description: result.description,
            item_image: result.item_image
           })
            console.log("PIC", result);
          })
     })
    console.log("HEY GRL", this.state);
  }

  render() {
      const { title, user_id, description, item_image, errors, isLoading } = this.state;
      console.log("HORSE??", this.state);

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Edit Scrapbook Item</h1>

        <TextFieldGroup
          field="title"
          label="Title"
          name="title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

        <TextFieldGroup
          field="description"
          label="Description"
          name="description"
          value={description}
          onChange={this.onChange}
          error={errors.title}
        />

        <TextFieldGroup
          field="item_image"
          label="Item Image url"
          name="item_image"
          value={item_image}
          onChange={this.onChange}
          error={errors.title}
        />
        <button type="submit" className="btn btn-primary">Edit</button>
          <TrashScrapbookItem id={this.state.pic_id}/>
      </form>

    );
  }
}


export default ScrapbookFormEdit
