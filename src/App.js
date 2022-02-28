import { useState } from 'react';

import Background from './components/Background';
import Board from './components/Board';
import Settings from './components/Settings';

function App() {
    const [gameOptions, setGameOptions] = useState(null);

    const startGame = options => {
        setGameOptions(options);
    }

    const restartGame = () => {
        setGameOptions(null);
    };

    return (
        <>
            <Background />
            <h1>Welcome to this memory game!</h1>
            <h2>First, choose your settings for the game.</h2>
            <h2>Once the cards are displayed, look for their pair flipping them to win.</h2>
            <h2>Good luck!</h2>
            {!gameOptions ? (
                <Settings startGame={startGame} />
            ) : (
                <Board gameOptions={gameOptions} restartGame={restartGame} />
            )}
        </>
    );
}

export default App;