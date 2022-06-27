import React from "react";
import "./css/App.css";
import Profile from "./Profile";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Highlights from "./HighLights";
import Contactme from "./Contactme";



function App(){

  return(
    <div className="App">
      <Profile />
      <AboutMe />
      <hr/>
      <Resume />
      <Highlights />

      <Contactme />
      {/* contact me */}
    </div>
  );
}

export default App;