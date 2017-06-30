import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm'
import MyDate from '../date'
import Weather from '../weather'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      description: '',
      town: '',
      weather: '',
      name: '',
      pic: '',
      temp: 0,
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


    console.log("LOCAL STORAGE from HOME >>>>>>", localStorage);

    //let auth = localStorage.profile
    let name = localStorage.name
    //let token = localStorage.jwtToken
    this.setState({ name })
    return this.getScrapbook(localStorage.id);

    console.log("NAME", name);




    console.log("LOCAL STORAGE from HOME >>>>>>", localStorage);
    const api = '58443d73bb4adf5b12a65dda8efd13fb'
    const rio = '2fb0ef496cacff708e1da0ad370562d6'


    $.ajax({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${rio}`,
      dataType: 'jsonp',
      success: (result) => {
        console.log('WEATHER RESULT: ', result);
        console.log('&', result.weather[0].temp);
      //   this.setState({town: result.name, weather: result.weather[0].description, temp: Math.ceil(result.main.temp)})
      //  console.log("STATE",this.state);
      localStorage.setItem("town", result.name)
      localStorage.setItem("weather", result.weather[0].description)
      localStorage.setItem("temp", Math.ceil(result.main.temp))

      },
      error: function(err) {
        console.log('WEATHER ERR: ', err);
      }
    })
    }

























  render() {

    let recent = this.state.photos
    let picsList = recent.map(function(picsDisplay) {
      console.log("ID", picsDisplay.id);
      let id = picsDisplay.id
      return (
      <li>
        <Link to={"/scrapbook/edit/" + id} title={picsDisplay.title} id={picsDisplay.id}><img src={picsDisplay.item_image} alt={picsDisplay.title}/></Link>
        </li>
      )
    })
      return (
          <div>

            <Navbar />
            <div className="container">
            <MyDate />

              <div className="splash">
              <h1 className="splash"> Welcome, { this.state.name }!</h1>
               <Weather />
              </div>




                   <div>
                   <button type="button" className="btn btn-default btn-circle btn-lg" data-toggle="modal" data-target="#myModal"><i className="glyphicon glyphicon-ok"></i>
                   </button>Add Photo
                   </div>


                   <div className="row">
                   <div className="container-nav">
                   <ul className="polaroids">
                      {picsList}
                  </ul>
                  </div>
                  </div>

                  <section className="clear-both" />



          <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">New Photo</h4>
                  </div>
                  <div className="modal-body">
                  <ScrapbookForm />
                  </div>
              </div>
            </div>
          </div>
</div>
      </div>

      )
  }
}

export default Home
