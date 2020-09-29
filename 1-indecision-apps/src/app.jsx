'use strict';

const options = [
  'option 1',
  'option 2',
  'option 3',
]

const IndecisionApp = () => {
  return (
    <div>
      <Header />
      <Action options={options}/>
      <Options options={options} />
    </div>
  );
};

const Header = (props) => (
  <div>
    <h1>Indecision</h1>
    <h2>Make decision making easy</h2>
  </div>
);

const Action = ({ options }) => {
  const handleOnClick = (e) => {
    e.preventDefault();

    const option = Math.floor(Math.random() * options.length);
    alert(options[option]);
  };

  return (
    <div>
      <button onClick={handleOnClick}>What should I do?</button>
    </div>
  );
};

const Options = ({ options }) => (
  <div>
    <ul>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </ul>
  </div>
);

const appRoot = document.getElementById('root');
ReactDOM.render(<IndecisionApp />, appRoot);
