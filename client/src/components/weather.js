import React from 'react';
import $ from 'jquery';

export class Weather extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            town: '',
            weather: '',
            temp: ''
          }

    }


    componentDidMount(){
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
        return (
          <div className="outline">
          <h3> We have {localStorage.weather} in { localStorage.town }, Colorado today. </h3><h3>The temperature is { localStorage.temp }&#176; C </h3>
          </div>
        );
    }
  }
  
  export default Weather
