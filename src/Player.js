import React from 'react';
import players from './players';

function App() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Player List</h1>
            <div>
                {players.map(player => (
                    <div
                        key={player.id}
                        style={{
                            border: '1px solid #ddd',
                            padding: '20px',
                            margin: '10px auto',
                            maxWidth: '300px',
                            borderRadius: '8px',
                            textAlign: 'left',
                        }}
                    >
                        <img
                            src={player.image}
                            alt={player.name}
                            style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
                        />
                        <h2>{player.name}</h2>
                        <p><strong>Age:</strong> {player.age}</p>
                        <p><strong>Position:</strong> {player.position}</p>
                        <p><strong>Team:</strong> {player.team}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
