import React from 'react';
import './PlayerCard.css'; // Assuming you will create a CSS file for styling

const PlayerCard = ({ player }) => {
    return (
        <div className="player-card">
            <img src={player.photo} alt={player.name} className="player-photo" />
            <h3 className="player-name">{player.name}</h3>
            <p className="player-position">Position: {player.position}</p>
            <p className="player-jersey">Jersey Number: {player.jerseyNumber}</p>
            <p className="player-stats">Matches Played: {player.matchesPlayed}</p>
            <p className="player-stats">Goals: {player.goals}</p>
            <p className="player-stats">Assists: {player.assists}</p>
            <p className="player-stats">Minutes Played: {player.minutesPlayed}</p>
            <p className="player-nationality">Nationality: {player.nationality}</p>
            <button className="details-button" onClick={() => alert(`More details about ${player.name}`)}>
                View Details
            </button>
        </div>
    );
};

export default PlayerCard;