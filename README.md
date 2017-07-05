# Memoryable
### An app that provides links to reality for people with cognitive decline and memory loss.
##

Visit the current deployed version of Memoryable: [memoryable.herokuapp.com](memoryable.herokuapp.com)

Notes:
```
To run:
$ PORT=3001 node server/bin/www
$ cd client
$ npm run server
```

###  Feature list:

 WELCOME TO MEMORYABLE
 * This site is designed to be a caregiver's support tool, specifically targeted for people who care for loved ones who suffer with cognitive decline. The person in the caregiver role will sign up for an account on their patient's behalf. The name entered in the signup form will be the patient's name, as the app will address the user by this name from that point forward. Users are then redirected to the Scrapbook page, where they can view all of their saved photos, with descriptions and names. This is the main purpose of the website as it provides a caregiver the opportunity to curate a collection of photographs of people, places or events that are significant to the patient and tie names and facts to these images. These visual reminders can be comforting and useful to the patient and caregiver alike.
 * The user then can choose to view other features which are designed to reorient the patient to time, place and current events, which they may need reminding of. There is a News feed, a Weather Report and a Todo list.
 * Users can also update their profile page and save changes, or edit or delete photos from the scrapbook.


### Technologies Used:
* Weather API: https://openweathermap.org/api
* News API: https://newsapi.org/
* React: front-end JS framework, enabled dynamic user interface
* Bootstrap: front-end JS framework, for CSS styling
* Node.<span>js server and PostgreSQL database


This site is currently in its beginning stages and the idea can go much further with added functionality. Upcoming planned features include:
* Google Maps for current location
* Facebook Oauth for access to photos
* Memory tests/games


##
