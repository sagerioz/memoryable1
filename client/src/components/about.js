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
          <p>Memoryable is a unique application designed to be a supportive tool for people who care for those afflicted with various types of cognitive impairment or cognitive decline (dementia, Alzheimer’s, Traumatic Brain Injury, etc.)
This site will provide and maintain links to reality by way of maintaining online photo albums which puts faces to names, provides to-do lists and other comforting activites such as providing a place to read the latest news and see a weather report. These passive tools help orient someone suffering from memory loss to what is happening now, in their life, and in their reality without the embarrassment of having to ask someone for reminders of what town they live in, what day it is, or who that familiar face may be.
Used with this goal in mind, a person who struggles with names, dates and day to day details can maintain dignity and have the reassurance of knowing the basic details of their life without feeling the dependency of having to ask someone for help.
Memoryable was designed, ideally, to be a passive tool to support and comfort those who may need the reassurance that its simple design and functionality can provide. It also helps relieve a caregiver’s repetitive task of having to remind their loved one of the same information, which can be a daily or even hourly task. Its most practical and useful application would be on a tablet sized device such as an iPad.
</p>
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
