
import React from 'react';
import ParentComponent from './Todo App/ParentComponent'; //Todo App
// import Home from './Resturant App/Home'; // RESTURANT APP
// import Header from './Record Keeping/header'; // RECORD APP
// import Body from './Record Keeping/Body'; // RECORD APP
// import WeatherApp from './Weather App/Weather'; // WEATHER APP

function App() {
  return (
    <div>
      <ParentComponent />
        {/* <Home /> 
        <Header />
        <Body />
        <WeatherApp />  */}
    </div>
  )
}
export default App;


// Finance App
/*
import React from 'react'; 
import Main from './Finance App/Main';
import { AppProvider } from './Finance App/Context'

function App() {
  return ( 
    <div>
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
}
export default App;
*/