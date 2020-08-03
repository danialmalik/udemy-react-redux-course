'use strict';
const app = {
    title: 'Indecision App',
    subtitle: 'Make decision making easy',
    options: ['One', 'Two']
}

const template = (
    <div>
        <title>{app.title}</title>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'Out of options'}</p>
        <ul>
            {app.options.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
    </div>
);

const appRoot = document.getElementById('root');
ReactDOM.render(template, appRoot);
