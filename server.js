
var SpotifyWebApi = require('spotify-web-api-node');

//This creates a new SpotifyWebApi object
var api = new SpotifyWebApi({
    clientId: '9705e2cc158043b19015ce7b233efb17',
    clientSecret:'1317994b8cd42779f82470d11f5557f',
        
})

//Replace this with your own access token
api.setAccessToken('BQAEd-oduyGRqEIEAh-d4bNGlUuvu9L6ONILKo0jYexNnzvgK1cgjn7c6ntAN3NYDDcu5r1gN9BJMJRMToYPTKAvMOmudNGjAYKp3meq3GYc8PoVsZA1fEi7UlG_IqfZuVXri07RFBuz4bEV68oC_NRfXdig6eT3LA');


//Returns JSON data for the artist ID that you put up.
  // api.getArtistRelatedArtists('699OTQXzgjhIYAHMy9RyPD')
  // .then(function(data) {
  //   console.log(data.body);
  // }, function(err) {
  //   done(err);
  // });

  api.getArtistTopTracks('699OTQXzgjhIYAHMy9RyPD', 'US')
  .then(function(data) {
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });