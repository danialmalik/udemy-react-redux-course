'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Make decision making easy',
    options: ['One', 'Two']
};

var count = 0;

var appRoot = document.getElementById('root');

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    option && app.options.push(option);

    console.log('Added option', option);
    renderApp();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    console.log(app.options[random]);
    alert(app.options[random]);
};

var renderApp = function renderApp() {

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
            'h3',
            null,
            app.options.length
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
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', placeholder: 'Enter option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
