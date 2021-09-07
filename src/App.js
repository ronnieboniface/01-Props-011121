import React from 'react';
import Header from './components/Header';
import SailorMoon from './components/SailorMoon';

// Ways to define Functional Component
function App(){
// const App = () => {

  // Good idea to have default props when you're working with fetch requests.
  // SailorMoon.defaultProps = {
  //   name: 'Moon', 
  //   color: 'red'
  // };
  
  const propsArray = [
    { name: 'Moon', color: 'red'},
    { name: 'Mercury', color: 'blue' },
    { name: 'Venus', color: 'orange' },
    { name: 'Mars', color: 'darkred' },
    { name: 'Jupiter', color: 'green' },
    { name: 'Saturn', color: 'purple' },
    { name: 'Uranus', color: 'darkblue' },
    { name: 'Neptune', color: 'cadetblue' },
    { name: 'Pluto', color: 'darkgreen' }
  ];

  const renderSailors = () => {
    return propsArray.map(object => {
      return <SailorMoon name={object.name} color={object.color} key={object.name} />
    });
  };

  return (
    <div className="characters">
      <Header />
      {/* // Hardcoded Props */}
      {/* 
        <SailorMoon name="Mercury" color="orange" />
        <SailorMoon name="Venus" color="pink" /> 
      */}

      {/* // Will use default props */}      
      {/* <SailorMoon />  */}


      {/* // This is just to show abstraction. We'll never write it this way. */}
      {/*  
        { new SailorMoon({name: 'Pluto', color: 'darkgreen'}).render() }
      */}

      {/* 
        {propsArray.map(object => {
          return <SailorMoon name={object.name} color={object.color} key={object.name} />
        })} 
      */}

      {renderSailors()}
    </div>
  );
};

export default App;