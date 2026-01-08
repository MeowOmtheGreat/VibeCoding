import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import Loading from './Loading';
import { players as playersData } from '../data/players';

const Dashboard = () => {
    const [players, setPlayers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('goals');
    const [isLoading, setIsLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(new Set());

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setPlayers(playersData);
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.player-card');
            const newVisibleCards = new Set(visibleCards);

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight - 100;

                if (isVisible) {
                    newVisibleCards.add(index);
                }
            });

            setVisibleCards(newVisibleCards);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility

        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleCards]);

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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="dashboard">
            <div className="dashboard-controls fade-in-scroll">
                <SearchBar onSearch={handleSearch} />
                <SortOptions onSortChange={handleSort} />
            </div>
            <div className="player-cards">
                {sortedPlayers.map((player, index) => (
                    <div
                        key={player.jerseyNumber}
                        style={{'--card-index': index}}
                        className={`card-wrapper ${visibleCards.has(index) ? 'fade-in-scroll visible' : 'fade-in-scroll'}`}
                    >
                        <PlayerCard player={player} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;