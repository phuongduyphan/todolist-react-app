import React from 'react';
import './FetchError.css';

const FetchError = ({ message, onRetry }) => (
  <div className="error-container">
    <p>Could not fetch todos. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
)

export default FetchError;