import React, { useState } from 'react';
import PlayerModal from './PlayerModal';
import { useToast } from '../contexts/ToastContext';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToast } = useToast();

    const handleViewDetails = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleFavorite = (e) => {
        e.stopPropagation();
        const newFavoriteState = !isFavorite;
        setIsFavorite(newFavoriteState);

        // Show toast notification
        addToast({
            title: newFavoriteState ? 'Added to Favorites' : 'Removed from Favorites',
            message: `${player.name} has been ${newFavoriteState ? 'added to' : 'removed from'} your favorites`,
            type: newFavoriteState ? 'success' : 'info',
            duration: 3000
        });

        // Add animation class
        const button = e.target;
        button.classList.add('pulse');
        setTimeout(() => button.classList.remove('pulse'), 300);
    };

    const handleQuickStats = () => {
        addToast({
            title: `${player.name} - Quick Stats`,
            message: `Goals: ${player.goals} | Assists: ${player.assists} | Matches: ${player.matchesPlayed}`,
            type: 'info',
            duration: 5000
        });
    };

    return (
        <>
            <div className="player-card">
                <div className="card-header">
                    <button
                        className={`favorite-icon ${isFavorite ? 'active' : ''}`}
                        onClick={handleFavorite}
                        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>

                <img src={player.photo} alt={player.name} className="player-photo" />
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">Position: {player.position}</p>
                <p className="player-jersey">Jersey Number: {player.jerseyNumber}</p>
                <p className="player-stats">Matches Played: {player.matchesPlayed}</p>
                <p className="player-stats">Goals: {player.goals}</p>
                <p className="player-stats">Assists: {player.assists}</p>
                <p className="player-stats">Minutes Played: {player.minutesPlayed}</p>
                <p className="player-nationality">Nationality: {player.nationality}</p>

                <div className="card-actions">
                    <button className="details-button" onClick={handleViewDetails}>
                        View Details
                    </button>
                    <button className="quick-stats-btn" onClick={handleQuickStats}>
                        📊 Quick Stats
                    </button>
                </div>
            </div>

            <PlayerModal
                player={player}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default PlayerCard;