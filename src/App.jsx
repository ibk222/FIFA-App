import React from 'react';
import PlayersList from './PlayersList';

function App() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Player List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
}

export default App;
