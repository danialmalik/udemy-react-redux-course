'use strict';

let count = 0;

const appRoot = document.getElementById('root');

const renderApp = () => {
    console.log('rendering')
    let template = (
        <div>
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
