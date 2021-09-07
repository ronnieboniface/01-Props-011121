import React from 'react';

// Functional Components

// const SailorMoon = (props) => {
//   return (
//     <div>
//       <h1 style={{color: props.color}}>Hello, Sailor {props.name}!</h1>
//     </div>
//   );
// };

// const SailorMoon = (props) => {
//   const { name, color } = props;
//   return (
//     <div>
//       <h1 style={{color: color}}>Hello, Sailor {name}!</h1>
//     </div>
//   );
// };

// const SailorMoon = ({ name, color }) => {
//   return (
//     <div>
//       <h1 style={{color: color}}>Hello, {name}!</h1>
//     </div>
//   );
// };


// Class Component
class SailorMoon extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  // static defaultProps = {
  //   name: 'Sailor Moon',
  //   color: 'Red'
  // };

  render(){
    // console.log(this)
    return (
      <div>
        <h1 style={{color: this.props.color}}>Hello, Sailor {this.props.name}!</h1>
      </div>
    );
  };
};


export default SailorMoon;