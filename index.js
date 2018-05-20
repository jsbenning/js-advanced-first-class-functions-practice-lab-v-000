// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, loc){
  drivers.forEach(function(driver){
    if (driver.hometown === loc){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(drivers){
  let myDrivers = drivers.slice(0);
  let sorted = myDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return sorted;
}