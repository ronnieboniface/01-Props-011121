import React from 'react';

// const SailorMoon = ({ info }) => {
//   const { planet, color } = info;
//   return (
//     <div>
//       <h1 style={{color: color}}>Hello, {planet}!</h1>
//     </div>
//   );
// };

// const SailorMoon = (props) => {
//   const { name, color } = props;
//   return (
    // <div>
    //   <h1 style={{color: color}}>Hello, Sailor {name}!</h1>
    // </div>
//   );
// };


class SailorMoon extends React.Component {
  constructor(props) {
    super(props);
  };

  // static defaultProps = {
  //   name: 'Sailor Moon',
  //   color: 'Red'
  // };

  render(){
    return (
      <div>
        <h1 style={{color: this.props.color}}>Hello, Sailor {this.props.name}!</h1>
      </div>
    );
  };
};

// Header.defaultProps = {
//   name: 'Sailor Moon', 
//   color: 'red'
// };

export default SailorMoon;