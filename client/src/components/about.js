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
          <p className="intro">Memoryable is a supportive tool for people who care for those afflicted with various types of cognitive impairment or cognitive decline (dementia, Alzheimer's, Traumatic Brain Injury, etc.) Memoryable helps maintain a person's link to reality by providing an online photo album (which puts names and faces together), displaying the time, date and location of the guest, hosting to-do lists and other familiar activities such as a place to read the latest news and see a weather report.

          Created by Erica Epperson, inspired by the need she saw in her mother, Loreley, who had moderate dementia. Like so many elderly people, Loreley needed daily reminders of where she lived, what day it was, and who the people around her were, yet she was often silent in her confusion. This app was designed to help people like Loreley maintain their dignity and their memories at the same time.

 Its most practical and useful application would be on a tablet sized device such as an iPad.
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
