import React from 'react';

export class MyDate extends React.Component {
    constructor() {
        super();

        let today = new Date();

        let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

         let day = dayOfWeek[today.getDay()]

         var monthNames = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"
          ];

         var date = today.getUTCDate();

         let month = monthNames[today.getMonth() + 1]

         let dateNow = day + ', ' + month + ' ' + date + ', ' + today.getFullYear()


 console.log("DATE", today);

        this.state = {
            dateNow: dateNow
        };
    }

    render() {
        return (
            <span><h3>
              {this.state.dateNow}
              </h3>
            </span>
        );
    }
  }
  export default MyDate
