// What we'd need to write without React

const rootElement = document.querySelector('#root');

const charArray = [
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


const addHeaderToDom = () => {
  const headerH1 = document.createElement('h1');

  headerH1.innerText = 'Welcome to my JavaScript App!';

  rootElement.appendChild(headerH1);
};

const renderSailors = () => {
  charArray.forEach(char => {
    const h1 = document.createElement('h1');
    h1.innerText = `Hello, Sailor ${char.name}`;
    h1.style.color = char.color;

    rootElement.appendChild(h1);
  })
};

addHeaderToDom();
renderSailors();