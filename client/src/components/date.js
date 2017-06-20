import React from 'react';

export class MyDate extends React.Component {
    constructor() {
        super();

        let today = new Date(),
          date = 'Today is ' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDay();

 console.log("DATE", today);
        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div>
              {this.state.date}
            </div>
        );
    }
  }
  export default MyDate
