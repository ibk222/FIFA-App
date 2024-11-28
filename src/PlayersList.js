import React from 'react';
import Player from './Player';
import players from './players';

function PlayersList() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
            {players.map(player => (
                
                <Player key={player.id} player={player} />
            ))}
        </div>
    );
}

export default PlayersList;
