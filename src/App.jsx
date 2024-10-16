import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(prev => prev + 1); // Увеличиваем на 1
    }

    function handleDecrement() {
        setCount(prev => prev - 1); // Уменьшаем на 1
    }

    return (
        <div className="wrapper">
            <h1 className="heading">
                {count}
            </h1>
            <div className="buttons">
                <button className="button" onClick={handleIncrement}>
                    +
                </button>
                <button className="button" onClick={handleDecrement}>
                    -
                </button>
            </div>
        </div>
    );
}

export default App;
