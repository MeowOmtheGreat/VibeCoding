import React from 'react';
import './Loading.css';

const Loading = ({ message = "Loading Real Madrid Legends..." }) => {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="loading-spinner">
                    <div className="spinner-ball ball-1"></div>
                    <div className="spinner-ball ball-2"></div>
                    <div className="spinner-ball ball-3"></div>
                </div>
                <h3 className="loading-message">{message}</h3>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;