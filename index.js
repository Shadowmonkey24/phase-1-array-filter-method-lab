// Code your solution here
const findMatching = (drivers,search) => {
    return drivers.filter((driver) => {
      return driver.toLowerCase() === search.toLowerCase()
    });
  };
  
  const fuzzyMatch = (drivers,letters) => {
    return drivers.filter((driver) => {
      const slicedName = driver.slice(0, 2).toLowerCase();
      return slicedName === letters.toLowerCase();
    });
};

const matchName = (driversArrObj, searchName) => {
    const foundsNames = driversArrObj.filter((driverObj) => {
      return driverObj.name === searchName
    });
    return foundsNames
  };