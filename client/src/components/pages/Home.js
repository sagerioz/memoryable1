import React, { Component } from 'react'
import Navbar from './../navbar'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import ScrapbookForm from '../scrapbook/ScrapbookForm';
import TrashScrapbookItem from '../buttons/deleteBtn.js'
import MyDate from '../date'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      title: '',
      description: '',
      town: '',
      weather: '',
      temp: 0
    }
  }

  componentDidMount(){
    const api = '58443d73bb4adf5b12a65dda8efd13fb'
    const rio = '2fb0ef496cacff708e1da0ad370562d6'
    let userData = ''
    $.ajax({
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?zip=80301,us&units=metric&appid=${api}`,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        userData = {
          cityName: result.name,
          weatherDesc: result.weather[0].description,
          temp: result.main.temp

        }
      },
      error: function(err) {
        console.log(err);
      }
    }).then(() => {
      this.setState({town: userData.cityName, weather: userData.weatherDesc, temp: Math.ceil(userData.temp)})
    }).then(() => {
    fetch('/api/scrapbook', {
           method: 'GET'
         }).then(res => {
         return res.text().then(pics => {
           pics = JSON.parse(pics)
           this.setState({
             //id: pics,
             photos: pics
            // title: pics,
            // description: pics
           })
            console.log("PICS", pics);
          })
     })
   })
   }


  render() {

    let recent = this.state.photos
    let town = this.state.town
    let weather = this.state.weather
    let temp = this.state.temp
    let picsList = recent.map(function(picsDisplay) {
      console.log("ID", picsDisplay.id);
      return <div className="box effect2"><img src={picsDisplay.item_image} width="75%" alt="scrapbook"/>
      <div className="title"><p>{picsDisplay.title} {picsDisplay.description}</p>
      <a href="#" className="btn btn-primary">edit</a><TrashScrapbookItem id={picsDisplay.id}/>
      </div>
      </div>
    })
      return (
          <div>
            <Navbar />
              <div>
              <div className="splash">
              <h1> Hello, Loreley</h1>
              <MyDate />
              <h3> { weather } in { town } today. The temperature is { temp } degrees C </h3>
              </div>



                  <section className="container2">
                    {picsList}
                  </section>

              </div>
              <div><ScrapbookForm/></div>
          </div>
      )
  }
}

export default Home