$(document).ready(function(){
  // Aaron Dull 2020 12 06
  // function zoom() {zoom in and out}
  // function solarSystemObject(x, y, z, vx, vy, vz, mass, density) {create object with initial velocity and position}

  function spawnSSO(theObject) {
    console.log("spawning sso");
    let objectName = theObject.id.slice(0,-4);
    console.log(objectName);
    let objectImageFilePath = `../assets/${objectName}.png`;

  }

  $( ".sso-btn" ).each(function() {
    $( this ).click( spawnSSO(this) );
  });

// hi

});