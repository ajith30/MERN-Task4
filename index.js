// 1. How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

// If we use  JSON.stringify() will gives false.
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false


// Using Loadash of JavaScript library can compare two JSON have the same properties without order.

console.log(_.isEqual(obj1,obj2)); // true

//By not using any library if it's not a nested JSON object



var isEqual = (obj1, obj2) => {
  var objOneKeys = Object.keys(obj1);  //  ['name', 'age']
  var objTwoKeys =Object.keys(obj2);   //  ['age', 'name']

  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let i = 0; i < objOneKeys.length; i++) {
    let key = objOneKeys[i];
    
    if (obj1.key !== obj2.key) {
      return false;
    }
  }
 
  return true;
}
console.log(isEqual(obj1, obj2));

//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags,name, region, sub region and
// population in console


// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v3.1/all", true);

// Send the Request to the Server 
request.send(null);



// Parse the Text Passed on from the server
request.onload = function () {
  var response = JSON.parse(request.responseText);
  console.log(response);

    response.forEach((country) => {
    console.log(country.flag);
    console.log(country.name.common);
    console.log(country.region);
    console.log(country.subregion);
   })
}