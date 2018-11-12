// set the node vars

var bandsInTown = require('bandsintown');
var omdb = require('omdb');
// var spotifyAPI = require('node-spotify-api')
// var request = require('request');
var fs = require('fs');
var keys = require('./keys.js');
var moment = require('moment.js');

require("dotenv").config();


// Grab the inputs which will always be the third and 4th argument.
var input1 = process.argv[2];
var input2 = process.argv[3];


if (input1 === "concert-this") {
  concertFinder();
} else if (input1 === "spotify-this-song") {
  spotifySong();
} else if (input1 === "movie-this") {
  movieSearch();
} else {
  console.log("error on command.");
}



//bands in town
var bandsintown = require('bandsintown');
 
bandsintown
  .getArtistEventList('Skrillex')
  .then(function(events) {
    // return array of events
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    } else {

      console.log("Name of venue: " + );
      console.log("Venue Location: " + );
      console.log("Date of the Event: " + );
      console.log("Band: " + input2);
    }
  
  });



// Then run a request to the OMDB API with the movie specified
var movieSearch = function (movieFinder) {
  // Load request npm module
  var request = require("request");
  var movieFinder = input2;

  if (movieFinder === undefined) {
    movieFinder = "spaceballs";
  }


  request("http://www.omdbapi.com/?t=" + movieFinder + "&y=&plot=short&r=json", function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("* Title of the movie:         " + JSON.parse(body).Title);
      console.log("* Year the movie came out:    " + JSON.parse(body).Year);
      console.log("* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating);
      console.log("* Country produced:           " + JSON.parse(body).Country);
      console.log("* Language of the movie:      " + JSON.parse(body).Language);
      console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
      console.log("* Actors in the movie:        " + JSON.parse(body).Actors);

      for (var i = 0; i < JSON.parse(body).Ratings.length; i++) {
        if (JSON.parse(body).Ratings[i].Source === "Rotten Tomatoes") {
          console.log("* Rotten Tomatoes Rating:     " + JSON.parse(body).Ratings[i].Value);
          if (JSON.parse(body).Ratings[i].Website !== undefined) {
            console.log("* Rotten Tomatoes URL:        " + JSON.parse(body).Ratings[i].Website);
          }
        }
      }
    }
  });
}


function spotifyMe() {

  var searchTrack;
  if (input2 === undefined) {
    searchTrack = "The Sign";
  } else {
    searchTrack = input2;
  }
 
  spotify.search({ type: 'track', query: searchTrack }, function (err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    } else {

      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("Preview Here: " + data.tracks.items[0].preview_url);
    }
  });
};