import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import Favourites from "./Favourites";
var name = "Rajeev Kumar";
var tarikh = new Date().toLocaleDateString();
var ctime = new Date().toLocaleTimeString();
var pic1 =
  "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=pexels-pixabay-462118.jpg&fm=jpg";
var pic2 =
  "https://images.pexels.com/photos/357189/pexels-photo-357189.jpeg?cs=srgb&dl=pexels-pixabay-357189.jpg&fm=jpg";
var pic3 =
  "https://images.pexels.com/photos/633437/pexels-photo-633437.jpeg?cs=srgb&dl=pexels-leonardo-jarro-633437.jpg&fm=jpg";
var link = "https://www.w3schools.com";
var heading1 = {
  color: "blue",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  margin: "50px 0px",
};
var heading = {
  color: "blue",
  textAlign: "center",
};
var hr = new Date();
hr = hr.getHours();
if (hr> 1 && hr < 12) {
  var wish = "Good morning";
  var swish = {
    color: "green"
  }
} else if (hr => 12 && hr < 19) {
  wish = "Good afternoon";
  swish = {
    color: "cyan"
  }
} else {
  wish = "Good night";
  swish = {
    color: "black"
  }
}

function App() {
  return (
    <>
      <h1 style={heading} contentEditable="true">
        My name is {name} react app
      </h1>
      <p>Today date is {tarikh}</p>
      <p>Current time is {ctime}</p>
      <div style={heading1}>
        <a href={link} target="_blank">
          <img src={pic1} width="200" height="150" alt="./error" />
        </a>
        <img src={pic2} alt="error1" width="200" height="150" />
        <img src={pic3} alt="error2" width="200" height="150" />
      </div>
      <h3>
        Hello sir ,<span style={swish}>{wish}</span>
      </h3>
      <Heading />
      <Para />
      <Favourites />
    </>
  );
}
export default App;
