import React from 'react';
import SailorMoon from './components/layout/SailorMoon';

const App = () => {
  // A really great use for default props is with images
  App.defaultProps = {
    name: 'Moon', 
    color: 'red'
  };
  
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
    <div>
      {/* <SailorMoon name="Mercury" color="orange" />
      <SailorMoon name="Venus" color="pink" /> */}

      {/* This is technically what we're doing:
        This is not applicable when we're using class components */}

      {/* {SailorMoon({name: "Masked Tuxedo", color: "black"})} */}

      {/* This is just to show abstraction. We'll never write it this way. */}
      {/* { new SailorMoon({name: 'Masked Tuxedo', color: 'black'}).render() } */}

      {/* {propsArray.map(object => {
        return <SailorMoon name={object.name} color={object.color} key={object.name} />
      })} */}

      {renderSailors()}
    </div>
  );
};

export default App;