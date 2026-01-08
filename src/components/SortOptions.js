import React from 'react';

const SortOptions = ({ onSortChange }) => {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };

    return (
        <div className="sort-options">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="goals">Goals</option>
                <option value="assists">Assists</option>
                <option value="matches">Matches Played</option>
            </select>
        </div>
    );
};

export default SortOptions;