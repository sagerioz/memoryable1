import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props)

    // if (!localStorage.token) {
    //   window.location.href = '/'
    // }
  }

  render() {

        let blurb = (
          <div>
          <h2>About this site</h2>
          <p>Memoryable is a unique application designed to work as a tool for those who care for people afflicted with cognitive impairment.</p>
          <p>This site is designed as a way to maintain links to reality by way of maintaining online photo albums, to-do lists and other activites that help orient someone suffering from memory loss to what is happening now, in their life, and in their reality.</p>
          <p> Used with this goal in mind, a person who struggles with names, dates and day to day details can maintain dignity and have the reassurance of knowing the basic details of their life without feeling the dependency of having to ask someone for help.</p>
          <p>Memoryable was designed, ideally, to be a passive tool to support and comfort those who may need the reassurance that its simple purpose can provide.</p>
          </div>
        )

        return (
        <div>
                { blurb }
        </div>
        );
      }
    }


export default About
