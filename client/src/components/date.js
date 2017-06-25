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

         let month = monthNames[today.getMonth()]

         let dateNow = 'Today is ' + day + ', ' + month + ' ' + date + ', ' + today.getFullYear()


 console.log("DATE", today);

        this.state = {
            dateNow: dateNow
        };
    }

    render() {
        return (
            <div><h3>
              {this.state.dateNow}
              </h3>
            </div>
        );
    }
  }
  export default MyDate
