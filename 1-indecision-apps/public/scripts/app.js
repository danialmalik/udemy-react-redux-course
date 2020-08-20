'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var IndecisionApp = function IndecisionApp() {
    var _useState = useState({
        option: [1, 2]
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, null),
        React.createElement(Options, null)
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
