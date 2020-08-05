'use strict';
const app = {
    title: 'Indecision App',
    subtitle: 'Make decision making easy',
    options: ['One', 'Two']
}

let count = 0;

const appRoot = document.getElementById('root');

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    option && app.options.push(option);

    console.log('Added option', option);
    renderApp()
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    console.log(app.options[random])
    alert(app.options[random])
}

const renderApp = () => {

    let template = (
        <div>
            <title>{app.title}</title>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'Out of options'}</p>
            <h3>{app.options.length}</h3>
            <ul>
                {app.options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>

            <button disabled={!app.options.length} onClick={onRemoveAll}>Remove All</button>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' placeholder='Enter option'></input>
                <button>Add Option</button>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp()
