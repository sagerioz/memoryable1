import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Connections extends Component {
  constructor(props) {
    super(props)

  }

  render() {

        let blurb = (
          <div>

          <div>
            <p className="intro">
              Many online resources, such as the ones listed here, can offer support and advice for caregivers of people with cognitive impairment, dementia, Alzheimers, and other related conditions.
            </p>
          </div>
            <div className="li-center">
            <p className="intro-li">
              <a href="http://www.missingseniornetwork.com">Missing Senior Network</a>
            </p>

            <p className="intro-li">
              <a href="https://www.care.com/">Care.com</a>
            </p>

            <p className="intro-li">
              <a href="http://www.alz.org/dementia/mild-cognitive-impairment-mci.asp">Alzheimers Association</a>
            </p>

            <p className="intro-li">
              <a href="https://www.caregiver.org/">Family Caregiver Alliance</a>
            </p>

            <p className="intro-li">
              <a href="https://www.dailystrength.org/group/dementia">Daily Strength</a>
            </p>

            <p className="intro-li">
              <a href="https://www.carie.org/">CARIE</a>
            </p>
            </div>

          </div>
        )

        return (
        <div>
                { blurb }
        </div>
        );
      }
    }


export default Connections
