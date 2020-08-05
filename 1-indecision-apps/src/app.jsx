'use strict';
const app = {
    title: 'Indecision App',
    subtitle: 'Make decision making easy',
    options: ['One', 'Two']
}

let count = 0;

const appRoot = document.getElementById('root');

const renderApp = () => {
    console.log('rendering')
    let template = (
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
            <hr />
            <h1>Count: {count}</h1>

            <button onClick={() => {
                console.log(++count);
                renderApp();
            }}>
                +1
            </button>

            <button onClick={() => {
                console.log(--count);
                renderApp();
            }}>
                -1
            </button>

            <button onClick={() => {
                console.log(count = 0);
                renderApp();
            }}>
                reset
            </button>

        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderApp();
