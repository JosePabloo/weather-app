import React from "react";

import Titles from "./components/Titles";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY ="f7301b4d01cee38c215671e794c39de5";

class App extends React.Component{
    getWeather = () => {}
    render(){
        return(
          <div>
              <Titles/>
              <Form/>
              <Weather/>

          </div>
        );
    }
}



export default App;

