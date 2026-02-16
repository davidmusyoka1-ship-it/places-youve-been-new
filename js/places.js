// Constructor function for Place
function Place(location, landmark, season, notes) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

// Prototype method to describe the place
Place.prototype.describePlace = function() {
  return `
Location: ${this.location}
Landmark: ${this.landmark}
Season: ${this.season}
Notes: ${this.notes}`;
};
