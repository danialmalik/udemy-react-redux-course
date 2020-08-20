'use strict';
import {userState} from 'react';

const IndecisionApp = () => {
    const [state, setState] = useState({
        option: [
            1,
            2
        ]
    })

    return (
        <div>
            <Header />
            <Action />
            <Options />

        </div>
    );
}

const Header = (props) => (
    <div>
        <h1>Indecision</h1>
        <h2>
            Make decision making easy
        </h2>
    </div>
)


const Action = ({ options }) => {
    const handleOnClick = (e) => {
        e.preventDefault();

        const option = Math.floor(Math.random()*options.length);
        alert(options[option])
    }

    return (
        <div>
            <button onClick={handleOnClick}>
                What should I do?
            </button>
        </div>
    )
}

const Options = ({ options }) => (
    <div>
        <ul>
            {options.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </ul>
    </div>
)


const appRoot = document.getElementById('root');
ReactDOM.render(<IndecisionApp />, appRoot);
