'use strict';

var options = ['option 1', 'option 2', 'option 3'];

var IndecisionApp = function IndecisionApp() {
  return React.createElement(
    'div',
    null,
    React.createElement(Header, null),
    React.createElement(Action, { options: options }),
    React.createElement(Options, { options: options })
  );
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Indecision'
    ),
    React.createElement(
      'h2',
      null,
      'Make decision making easy'
    )
  );
};

var Action = function Action(_ref) {
  var options = _ref.options;

  var handleOnClick = function handleOnClick(e) {
    e.preventDefault();

    var option = Math.floor(Math.random() * options.length);
    alert(options[option]);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: handleOnClick },
      'What should I do?'
    )
  );
};

var Options = function Options(_ref2) {
  var options = _ref2.options;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ul',
      null,
      options.map(function (option, index) {
        return React.createElement(
          'option',
          { key: index },
          option
        );
      })
    )
  );
};

var appRoot = document.getElementById('root');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
