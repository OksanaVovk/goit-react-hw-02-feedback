import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback">
    {options.map(option => (
      <button
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
