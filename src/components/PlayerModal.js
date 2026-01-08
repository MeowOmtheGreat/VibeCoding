import React, { useState } from 'react';
import './PlayerModal.css';

const PlayerModal = ({ player, isOpen, onClose }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isCompared, setIsCompared] = useState(false);

    if (!isOpen) return null;

    const getPositionColor = (position) => {
        switch (position.toLowerCase()) {
            case 'forward': return '#ff4757';
            case 'midfielder': return '#3742fa';
            case 'defender': return '#2ed573';
            case 'goalkeeper': return '#ffa502';
            default: return '#ff4757';
        }
    };

    const getStatsPercentage = (value, max) => {
        return Math.min((value / max) * 100, 100);
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        alert(`${isFavorite ? 'Removed from' : 'Added to'} favorites: ${player.name}`);
    };

    const handleCompare = () => {
        setIsCompared(!isCompared);
        alert(`${isCompared ? 'Removed from' : 'Added to'} comparison: ${player.name}`);
    };

    const handleShare = () => {
        const shareText = `Check out ${player.name}'s stats!\nGoals: ${player.goals}\nAssists: ${player.assists}\nMatches: ${player.matchesPlayed}`;
        if (navigator.share) {
            navigator.share({
                title: `${player.name} - Real Madrid Stats`,
                text: shareText,
            });
        } else {
            navigator.clipboard.writeText(shareText);
            alert('Player stats copied to clipboard!');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>

                <div className="modal-header">
                    <img src={player.photo} alt={player.name} className="modal-photo" />
                    <div className="modal-title">
                        <h2>{player.name}</h2>
                        <span
                            className="modal-position"
                            style={{ backgroundColor: getPositionColor(player.position) }}
                        >
                            {player.position}
                        </span>
                        <p className="modal-jersey">#{player.jerseyNumber}</p>
                    </div>
                </div>

                <div className="modal-body">
                    <div className="stats-section">
                        <h3>Performance Statistics</h3>
                        <div className="stat-item">
                            <span className="stat-label">Matches Played</span>
                            <div className="stat-bar">
                                <div
                                    className="stat-fill"
                                    style={{
                                        width: `${getStatsPercentage(player.matchesPlayed, 800)}%`,
                                        backgroundColor: '#3742fa'
                                    }}
                                ></div>
                            </div>
                            <span className="stat-value">{player.matchesPlayed}</span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-label">Goals</span>
                            <div className="stat-bar">
                                <div
                                    className="stat-fill"
                                    style={{
                                        width: `${getStatsPercentage(player.goals, 500)}%`,
                                        backgroundColor: '#ff4757'
                                    }}
                                ></div>
                            </div>
                            <span className="stat-value">{player.goals}</span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-label">Assists</span>
                            <div className="stat-bar">
                                <div
                                    className="stat-fill"
                                    style={{
                                        width: `${getStatsPercentage(player.assists, 200)}%`,
                                        backgroundColor: '#2ed573'
                                    }}
                                ></div>
                            </div>
                            <span className="stat-value">{player.assists}</span>
                        </div>

                        <div className="stat-item">
                            <span className="stat-label">Minutes Played</span>
                            <div className="stat-bar">
                                <div
                                    className="stat-fill"
                                    style={{
                                        width: `${getStatsPercentage(player.minutesPlayed, 70000)}%`,
                                        backgroundColor: '#ffa502'
                                    }}
                                ></div>
                            </div>
                            <span className="stat-value">{player.minutesPlayed.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="info-section">
                        <div className="info-item">
                            <span className="info-label">Nationality</span>
                            <span className="info-value">{player.nationality}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Goals per Match</span>
                            <span className="info-value">{(player.goals / player.matchesPlayed).toFixed(2)}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Assists per Match</span>
                            <span className="info-value">{(player.assists / player.matchesPlayed).toFixed(2)}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Avg Minutes/Match</span>
                            <span className="info-value">{Math.round(player.minutesPlayed / player.matchesPlayed)}</span>
                        </div>
                    </div>
                </div>

                <div className="modal-actions">
                    <button
                        className={`action-btn favorite-btn ${isFavorite ? 'active' : ''}`}
                        onClick={handleFavorite}
                    >
                        {isFavorite ? '💔 Remove Favorite' : '❤️ Add to Favorites'}
                    </button>
                    <button
                        className={`action-btn compare-btn ${isCompared ? 'active' : ''}`}
                        onClick={handleCompare}
                    >
                        {isCompared ? '❌ Remove Compare' : '⚖️ Compare Player'}
                    </button>
                    <button className="action-btn share-btn" onClick={handleShare}>
                        📤 Share Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerModal;