'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Make decision making easy',
    options: ['One', 'Two']
};

var count = 0;

var appRoot = document.getElementById('root');

var renderApp = function renderApp() {
    console.log('rendering');
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'title',
            null,
            app.title
        ),
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'Out of options'
        ),
        React.createElement(
            'ul',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        ),
        React.createElement('hr', null),
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    console.log(++count);
                    renderApp();
                } },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    console.log(--count);
                    renderApp();
                } },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    console.log(count = 0);
                    renderApp();
                } },
            'reset'
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
