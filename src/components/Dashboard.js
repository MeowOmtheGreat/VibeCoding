import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import playersData from '../data/players';

const Dashboard = () => {
    const [players, setPlayers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('goals');

    useEffect(() => {
        setPlayers(playersData);
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleSort = (option) => {
        setSortOption(option);
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedPlayers = filteredPlayers.sort((a, b) => {
        if (sortOption === 'goals') {
            return b.goals - a.goals;
        } else if (sortOption === 'assists') {
            return b.assists - a.assists;
        } else {
            return b.matchesPlayed - a.matchesPlayed;
        }
    });

    return (
        <div className="dashboard">
            <h1>Real Madrid Player Statistics</h1>
            <SearchBar onSearch={handleSearch} />
            <SortOptions onSort={handleSort} />
            <div className="player-cards">
                {sortedPlayers.map(player => (
                    <PlayerCard key={player.jerseyNumber} player={player} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;