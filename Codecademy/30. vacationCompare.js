var myPlaces = ['Ratargul','Sundarban','Saint Martin'];
var friendPlaces = ['Bandarban','Rangamati','Sundarban'];
for (var i=0; i<myPlaces.length; i++) {
  for (var j=0; j<friendPlaces.length; j++) {
    if (myPlaces[i]===friendPlaces[j]) {
      console.log('Match: ' + myPlaces[i]);
    }
  }
}